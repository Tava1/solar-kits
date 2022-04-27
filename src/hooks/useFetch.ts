import { useQuery } from 'react-query';
import { AxiosRequestConfig } from 'axios';
import { api } from '@/services/api';

export function useFetch<T = unknown>(key: string, url: string, config?: AxiosRequestConfig<any>) {
	const {
		data: response,
		isLoading,
		isError,
	} = useQuery(
		key,
		async () => {
			const { data } = await api.get<T | null>(url, config);

			return data;
		},
		{
			staleTime: 1000 * 60, // 1 Minute
		},
	);

	if (!response) return { response: null, isLoading, isError };

	return { response, isLoading, isError };
}
