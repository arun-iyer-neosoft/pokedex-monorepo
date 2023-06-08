import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { PillBadge } from './PillBadge';

describe('PillBadge', () => {
	it('Renders the Pill with text', () => {
		const { container } = render(<PillBadge>data</PillBadge>);

		expect(screen.getByText('data')).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});

	it('Renders button with the correct background color', () => {
		const { container } = render(<PillBadge background='blue'>data</PillBadge>);

		expect(screen.getByText('data')).toHaveClass('bg-blue-700');
		expect(container).toMatchSnapshot();
	});
});
