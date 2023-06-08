export interface PokemonListType {
	name: string;
	url: string;
}

export interface PokeapiListResponseType {
	count: number;
	next: string;
	previous: string;
	results: PokemonListType[];
}

interface PokemonAbilitiesType {
	ability: {
		name: string;
	};
}

interface PokemonSpritesType {
	other: {
		'official-artwork': {
			front_default: string;
		};
	};
}

export interface PokemonStatsType {
	base_stat: number;
	stat: {
		name: string;
	};
}

interface PokemonTypesType {
	type: {
		name: string;
	};
}

export interface PokemonDetailsType {
	height: number;
	weight: number;
	id: number;
	name: string;
	abilities: PokemonAbilitiesType[];
	sprites: PokemonSpritesType;
	stats: PokemonStatsType[];
	types: PokemonTypesType[];
}

export interface PokemonGridItemType {
	title: string;
	data: string | number | Array<string | number>;
}
