import axios, { AxiosRequestConfig } from 'axios';

export const getData = async (url: string, config?: AxiosRequestConfig) => {
	const result = await axios.get(url, config);
	return result.data;
};
