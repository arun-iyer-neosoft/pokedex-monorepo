export const getPageKey = (page: number, pageLimit: number) => {
	return `${page}-${pageLimit}`;
};
