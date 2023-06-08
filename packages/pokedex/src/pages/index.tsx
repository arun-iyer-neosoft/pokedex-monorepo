import { GridColDef } from '@mui/x-data-grid';
import { getPageKey } from '@pd/utils';
import { DataTable } from '@ui/components';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchPokemonList } from '../store/reducers/pokemonListSlice';
import { AppStore, wrapper } from '../store/store';
import { PaginationType } from '../types/common';

export const getServerSideProps = wrapper.getServerSideProps(
	(store: AppStore) => async () => {
		const { page, pageSize } = store.getState().pokemon.pagination;
		await store.dispatch(fetchPokemonList({ page, pageSize }));
		return {
			props: {},
		};
	}
);

export default function Home() {
	const dispatch = useAppDispatch();
	const columns: GridColDef[] = [
		{
			field: 'name',
			headerName: 'Name',
			renderCell: (params) => {
				return <span className='capitalize text-lg'>{params.row.name}</span>;
			},
			width: 200,
		},
		{
			field: 'url',
			headerName: 'URL',
			align: 'right',
			headerAlign: 'right',
			flex: 1,
			renderCell: (params) => {
				return (
					<Link
						className='text-blue-600 hover:underline'
						href={`/${params.row.name}`}
					>
						View
					</Link>
				);
			},
		},
	];

	const onPageOrLimitChange = (model: PaginationType) => {
		dispatch(fetchPokemonList({ page: model.page, pageSize: model.pageSize }));
	};

	const { pokemonList, pagination, count, isLoading } = useAppSelector(
		(state) => state.pokemon
	);

	return (
		<div>
			<div className='max-w-5xl mx-auto'>
				<h1 className='text-5xl mb-12'>Welcome to your PokeDex</h1>
				<DataTable
					rows={
						pokemonList[getPageKey(pagination.page, pagination.pageSize)] ?? []
					}
					columns={columns}
					count={count}
					getRowId={(row) => row.name}
					pageLimitOptions={[10, 15, 20]}
					onPageOrLimitChange={(model) => onPageOrLimitChange(model)}
					pageAndLimit={pagination}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
}
