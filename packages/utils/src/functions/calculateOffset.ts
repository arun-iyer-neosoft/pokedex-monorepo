interface PageAndLimit {
	page: number;
	pageSize: number;
}

export const calculateOffset = ({ page, pageSize }: PageAndLimit): number => {
	return page * pageSize;
};
