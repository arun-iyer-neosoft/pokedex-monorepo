import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Progress } from './Progress';

describe('Progress', () => {
	it('Renders the Progress Bar', () => {
		const { container } = render(<Progress max={100} base={20} />);

		expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});

	it('Renders the Progress Bar with Width', () => {
		const { container } = render(<Progress max={100} base={20} />);

		expect(screen.getByTestId('progress-bar')).toHaveStyle('width:20%;');
		expect(container).toMatchSnapshot();
	});

	it('Renders the Progress Bar with background color', () => {
		const { container } = render(
			<Progress max={100} base={20} background='bg-red-400' />
		);

		expect(screen.getByTestId('progress-bar')).toHaveClass('bg-red-400');
		expect(container).toMatchSnapshot();
	});

	it('Renders the Progress Bar with gradient', () => {
		const { container } = render(
			<Progress max={100} base={20} gradient={true} />
		);

		expect(screen.getByTestId('progress-bar')).toHaveClass('bg-gradient-to-r');
		expect(container).toMatchSnapshot();
	});
});
