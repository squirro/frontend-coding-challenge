import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiConfig from '../config/api.json';

export const API = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${apiConfig.url}:${apiConfig.port}` }),
  endpoints: (builder) => ({
    getStoresData: builder.query({
      query: () => `stores`,
    }),
    getBooksData: builder.query({
      query: () => `books`,
    }),
    getAuthorsData: builder.query({
      query: () => `authors`,
    }),
    getCountriesData: builder.query({
      query: () => `countries`,
    }),
    getBookById: builder.query({
      query: (id: string) => `books/${id}`,
    }),
    getAuthorById: builder.query({
      query: (id: string) => `authors/${id}`,
    }),
    getCountryById: builder.query({
      query: (id: string) => `countries/${id}`,
    }),
  }),
});

export const {
  useGetStoresDataQuery,
  useGetBooksDataQuery,
  useGetAuthorsDataQuery,
  useGetCountriesDataQuery,
  useGetBookByIdQuery,
  useGetAuthorByIdQuery,
  useGetCountryByIdQuery,
} = API;
