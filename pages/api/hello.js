import useSWR from "swr";

const API_URL = "https://api.themoviedb.org/3/movie";
const language = "en-US";
const region = "US";
const key = "d4e3b1b2e2bad5a72f1efe3fd0635cd0";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useGetMovies = (page) => {
	const url = `${API_URL}/popular?api_key=${key}&language=${language}&page=${page}&region=${region}`;
	const { data, error } = useSWR(url, fetcher);

	return {
		url: url,
		movies: data,
		isLoading: !error && !data,
		isError: error,
	};
};

export const useGetDetails = (id) => {
	const url = `${API_URL}/${id}?api_key=${key}&language=${language}`;
	const { data, error } = useSWR(url, fetcher);

	return {
		url: url,
		details: data,
		isLoading: !error && !data,
		isError: error,
	};
};

export const useGetCast = (id) => {
	const url = `${API_URL}/${id}/credits?api_key=${key}&language=${language}`;
	const { data, error } = useSWR(url, fetcher);

	return {
		url: url,
		casts: data,
		isLoadingCast: !error && !data,
		isErrorCast: error,
	};
};
