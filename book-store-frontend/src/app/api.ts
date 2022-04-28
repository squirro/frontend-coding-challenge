import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiConfig from '../config/api.json';

export const storesApi = createApi({
  reducerPath: 'storesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${apiConfig.url}:${apiConfig.port}` }),
  endpoints: (builder) => ({
    getStoresData: builder.query<any, string>({
      query: () => `stores`,
    }),
  }),
});

export const { useGetStoresDataQuery } = storesApi;
