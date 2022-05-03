import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiConfig from '../config/api.json';

export const API = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${apiConfig.url}:${apiConfig.port}` }),
  endpoints: (build) => ({
    getStoresData: build.query({
      query: () => `stores`,
    }),
    getBooksData: build.query({
      query: () => `books`,
    }),
    getAuthorsData: build.query({
      query: () => `authors`,
    }),
    getCountryById: build.query({
      query: (id: string) => `countries/${id}`,
    }),
    setNewRating: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `stores/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
});

export const {
  useGetStoresDataQuery,
  useGetBooksDataQuery,
  useGetAuthorsDataQuery,
  useGetCountryByIdQuery,
  useSetNewRatingMutation,
} = API;
