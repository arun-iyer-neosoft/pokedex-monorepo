import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { DataTable } from './DataTable';

describe('DataTable', () => {
	const mockProps = {
		rows: [
			{ name: 'bulbasaur', url: 'https://pokeapi.com/api' },
			{ name: 'ivysaur', url: 'https://pokeapi.com/api' },
		],
		columns: [
			{ field: 'name', headerName: 'name' },
			{ field: 'url', headerName: 'url' },
		],
		pageLimitOptions: [5, 10, 20],
		onRowClick: jest.fn(),
		getRowId: (row) => row.name,
		pageAndLimit: { page: 0, pageSize: 10 },
		onPageOrLimitChange: jest.fn(),
		isLoading: false,
		count: 2,
	};

	const mockPropsChangedLimit = {
		...mockProps,
		pageAndLimit: { page: 1, pageSize: 10 },
	};

	it('Renders the MUI DataGrid with props', () => {
		const { container } = render(<DataTable {...mockProps} />);

		expect(screen.getByRole('grid')).toBeInTheDocument();
		expect(screen.getByText('bulbasaur')).toBeInTheDocument();
		expect(screen.getByText('ivysaur')).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});

	it('calls onRowClick when a row is clicked', () => {
		const { container } = render(<DataTable {...mockProps} />);
		const row = screen.getByText('bulbasaur');
		row.click();

		expect(mockProps.onRowClick).toHaveBeenCalledTimes(1);
		expect(container).toMatchSnapshot();
	});

	it('calls onPageOrLimitChange when a pagination is updated', () => {
		const { container, rerender } = render(<DataTable {...mockProps} />);

		rerender(<DataTable {...mockPropsChangedLimit} />);

		expect(mockProps.onPageOrLimitChange).toHaveBeenCalledTimes(1);
		expect(container).toMatchSnapshot();
	});
});
