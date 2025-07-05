import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
  }),
  tagTypes: ["books", "summary"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "books",
      providesTags: ["books"],
    }),

    getBookById: builder.query({
      query: (id) => `books/${id}`,
      providesTags: ["books"],
    }),

    addABook: builder.mutation({
      query: (book) => ({
        url: "books",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: book,
      }),
      invalidatesTags: ["books"],
    }),

    deleteABook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    updateABook: builder.mutation({
      query: (book) => ({
        url: `books/${book._id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: book,
      }),
      invalidatesTags: ["books"],
    }),

    getBorrowSummary: builder.query({
      query: () => "borrows",
      providesTags: ["summary"],
    }),

    borrowABook: builder.mutation({
      query: (borrow) => ({
        url: "borrows",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: borrow,
      }),
      invalidatesTags: ["summary"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useAddABookMutation,
  useDeleteABookMutation,
  useUpdateABookMutation,
  useGetBorrowSummaryQuery,
  useBorrowABookMutation,
} = baseApi;
