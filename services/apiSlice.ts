import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    postUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

// Export hooks for usage in components
export const { useGetUsersQuery, useGetPostByIdQuery, usePostUserMutation } =
  apiSlice;
