import { Progress } from '@ui/components';
import { PokemonStatsType } from '../../types/pokemon';

interface PokemonStatsViewProps {
	stats: PokemonStatsType[];
}

export const PokemonStatsView = ({ stats }: PokemonStatsViewProps) => {
	const maxStat = stats
		.map((stat) => stat.base_stat)
		.sort((a, b) => a - b)
		.at(-1);
	return (
		<div className=''>
			<h3 className='text-left text-3xl uppercase font-semibold mb-3'>Stats</h3>
			<ul className=''>
				{stats?.map((stat) => {
					return (
						<li
							className='text-lg uppercase flex items-center justify-between mb-1'
							key={stat.stat.name}
						>
							<span className='w-40'>{stat.stat.name}</span>
							<div className='bg-white flex-1 px-8 hidden sm:block'>
								<Progress max={maxStat ?? 100} base={stat.base_stat} gradient />
							</div>
							<span className='w-8 text-right'>{stat.base_stat}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
