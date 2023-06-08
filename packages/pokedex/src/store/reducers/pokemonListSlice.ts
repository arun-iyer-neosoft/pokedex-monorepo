import { POKEMON_API, calculateOffset, getData, getPageKey } from '@pd/utils';
import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { PaginationType } from '../../types/common';
import { PokeapiListResponseType, PokemonListType } from '../../types/pokemon';
import { AppDispatch, AppState } from '../store';

interface CachedPokemonListType {
	[key: string]: PokemonListType[];
}

interface PokemonListPayloadType {
	pageKey: string;
	data: PokemonListType[];
}

interface StateType {
	pokemonList: CachedPokemonListType;
	count: number;
	isLoading: boolean;
	pagination: PaginationType;
	isError: boolean;
}

const pagination: PaginationType = {
	page: 0,
	pageSize: 10,
};

const initialState: StateType = {
	pokemonList: {},
	isLoading: false,
	pagination,
	isError: false,
	count: 10,
};

export const pokemonListSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		setPokemonList: (state, action: PayloadAction<PokemonListPayloadType>) => {
			const { pageKey, data } = action.payload;
			state.pokemonList[pageKey] = data;
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setPagination: (state, action: PayloadAction<PaginationType>) => {
			state.pagination = action.payload;
		},
		setIsError: (state, action: PayloadAction<boolean>) => {
			state.isError = action.payload;
		},
		setCount: (state, action: PayloadAction<number>) => {
			state.count = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			HYDRATE,
			(
				state,
				action: Action<'__NEXT_REDUX_WRAPPER_HYDRATE__'> &
					PayloadAction<{ pokemon: StateType }>
			) => {
				const { page, pageSize } = action.payload.pokemon.pagination;
				const pageKey = getPageKey(page, pageSize);
				if (Object.hasOwn(state.pokemonList, pageKey)) {
					return { ...state };
				}
				return {
					...state,
					...action.payload.pokemon,
				};
			}
		);
	},
});

export const {
	setIsLoading,
	setPagination,
	setPokemonList,
	setIsError,
	setCount,
} = pokemonListSlice.actions;
export const pokemonReducer = pokemonListSlice.reducer;

export const fetchPokemonList =
	({ page, pageSize }: PaginationType) =>
	async (dispatch: AppDispatch, getState: () => AppState) => {
		try {
			const availablePokemonList = getState().pokemon.pokemonList;
			const pageKey = getPageKey(page, pageSize);
			if (!Object.hasOwn(availablePokemonList, pageKey)) {
				const data: PokeapiListResponseType = await getData(POKEMON_API, {
					params: {
						offset: calculateOffset({ page, pageSize }),
						limit: pageSize,
					},
				});
				dispatch(setPokemonList({ data: data.results, pageKey }));
				dispatch(setCount(data.count));
			}
			dispatch(setPagination({ page, pageSize }));
		} catch (error) {
			dispatch(setIsError(true));
		}
	};
