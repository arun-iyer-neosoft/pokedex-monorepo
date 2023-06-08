export const reduxMockData = {
	pokemon: {
		pokemonList: {
			'0-10': [
				{
					name: 'bulbasaur',
					url: 'https://pokeapi.co/api/v2/pokemon/1/',
				},
				{ name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
			],
		},
		isLoading: false,
		pagination: {
			page: 0,
			pageSize: 10,
		},
		isError: false,
		count: 10,
	},
};
