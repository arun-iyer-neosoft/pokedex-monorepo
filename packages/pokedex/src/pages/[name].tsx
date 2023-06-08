import { POKEMON_API, getData } from '@pd/utils';
import { Button, PillBadge } from '@ui/components';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PokemonDataGrid } from '../components/pokemonDetails/PokemonDataGrid';
import { PokemonStatsView } from '../components/pokemonDetails/PokemonStatsView';
import { PokemonDetailsType, PokemonGridItemType } from '../types/pokemon';

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	let data: PokemonDetailsType | undefined;
	if (typeof context.params?.name === 'string') {
		data = await getData(`${POKEMON_API}/${context.params.name}`);
	}
	return { props: { data } };
};

export default function PokemonDetails({
	data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const router = useRouter();
	const pokemonName = router.query.name as string;

	const gridData: PokemonGridItemType[] = [
		{
			title: 'height',
			data: data?.height ?? '',
		},
		{
			title: 'weight',
			data: data?.weight ?? '',
		},
		{
			title: 'abilities',
			data: data?.abilities.map((ability) => ability.ability.name) ?? '',
		},
	];

	return (
		<div className=''>
			<div className='max-w-5xl mx-auto bg-white p-12'>
				<Button onClick={router.back} variant='light'>{`< Back`}</Button>
				{data && (
					<>
						<div className='flex flex-col sm:flex-row mb-6'>
							<div className='mb-4 sm:mr-16 sm:mb-0'>
								<Image
									src={data.sprites.other['official-artwork'].front_default}
									alt={pokemonName}
									height={400}
									width={400}
									className='bg-gray-100 rounded-md p-4 w-full sm:w-auto'
								/>
							</div>
							<div className='flex-1 flex flex-col sm:py-6'>
								<h2 className='text-center text-4xl capitalize font-bold text-green-600 mb-12'>
									{`${data.name} #${data.id}`}
								</h2>
								<PokemonDataGrid gridData={gridData} />
								<div className='mb-12'>
									<h3 className='text-3xl font-semibold mb-4'>Type</h3>
									<div className='flex flex-wrap gap-6'>
										{data.types.map((type) => {
											return (
												<PillBadge key={type.type.name}>
													{type.type.name}
												</PillBadge>
											);
										})}
									</div>
								</div>
							</div>
						</div>
						<PokemonStatsView stats={data?.stats} />
					</>
				)}
			</div>
		</div>
	);
}
