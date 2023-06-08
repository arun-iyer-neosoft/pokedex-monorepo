import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Button } from './Button';

describe('Button', () => {
	it('Renders the Button with text', () => {
		const { container } = render(<Button>click me</Button>);

		expect(screen.getByText('click me')).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});

	it('Renders button with the correct variant color', () => {
		const { container } = render(<Button variant='primary'>click me</Button>);

		expect(screen.getByText('click me').closest('button')).toHaveClass(
			'bg-blue-600'
		);
		expect(container).toMatchSnapshot();
	});

	it('Button should be disabled when loading is true', () => {
		const { container } = render(<Button isLoading={true}>click me</Button>);

		expect(screen.getByText('click me').closest('button')).toBeDisabled();
		expect(container).toMatchSnapshot();
	});
});
