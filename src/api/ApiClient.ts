import axios from 'axios';
import { BASE_URL } from './Urls.ts';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
            refetchOnWindowFocus: false
        },
    },
})


export const getApiClient = (url: string) => {
    return axios.get(BASE_URL + url)
}

export const postApiClient = (url: string, payload: any) => {
    return axios.post(BASE_URL + url, payload);
}