import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "books",
    }),
    
    getBookById: builder.query({
      query: (id) => `books/${id}`,
    }),
  }),
});

export const { useGetAllBooksQuery, useGetBookByIdQuery } = baseApi;