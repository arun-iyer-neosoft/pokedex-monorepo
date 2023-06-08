import { PokemonGridItemType } from '../../types/pokemon';

interface PokemonDataGridProps {
	gridData: PokemonGridItemType[];
}

export const PokemonDataGrid = ({ gridData }: PokemonDataGridProps) => {
	return (
		<div className='bg-blue-500 grid grid-cols-2 gap-3 p-4 rounded-lg mb-12'>
			{gridData.map((item) => {
				return (
					<div key={item.title}>
						<dd className='font-semibold text-lg text-gray-100 capitalize'>
							{item.title}
						</dd>
						{typeof item.data !== 'object' ? (
							<dt className='text-xl text-white'>{item.data}</dt>
						) : (
							item.data.map((dat) => (
								<dt className='text-xl text-white' key={dat}>
									{dat}
								</dt>
							))
						)}
					</div>
				);
			})}
		</div>
	);
};
