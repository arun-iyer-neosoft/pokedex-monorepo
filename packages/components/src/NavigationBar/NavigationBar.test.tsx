import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { NavigationBar } from './NavigationBar';

describe('NavigationBar', () => {
	it('Renders the Navigation Bar with brand text', () => {
		const { container } = render(<NavigationBar Brand='Pokedex' />);

		expect(screen.getByText('Pokedex')).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
