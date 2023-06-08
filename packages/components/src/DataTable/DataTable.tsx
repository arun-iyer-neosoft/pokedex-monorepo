import {
	DataGrid,
	GridColDef,
	GridPaginationModel,
	GridRowParams,
	GridValidRowModel,
} from '@mui/x-data-grid';
import React from 'react';

interface DataGridProps<T extends GridValidRowModel> {
	rows: Array<T>;
	columns: GridColDef<T>[];
	isLoading?: boolean;
	onRowClick?: (row: GridRowParams<T>) => void;
	getRowId: (row: T) => string | number;
	pageLimitOptions: number[];
	pageAndLimit: GridPaginationModel;
	onPageOrLimitChange: (model: GridPaginationModel) => void;
	count: number;
}

export const DataTable = <T extends GridValidRowModel>({
	rows,
	columns,
	isLoading,
	count,
	getRowId,
	onPageOrLimitChange,
	onRowClick,
	pageAndLimit,
	pageLimitOptions,
}: DataGridProps<T>) => {
	return (
		<DataGrid
			rows={rows}
			columns={columns}
			loading={isLoading}
			onRowClick={onRowClick ? (row) => onRowClick(row) : undefined}
			getRowId={(row) => getRowId(row)}
			pageSizeOptions={pageLimitOptions}
			paginationModel={pageAndLimit}
			onPaginationModelChange={(model) => onPageOrLimitChange(model)}
			rowCount={count}
			paginationMode='server'
			disableRowSelectionOnClick
		/>
	);
};
