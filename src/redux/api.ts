import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "myPostApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], string>({
      query: () => "posts",
      providesTags: ["Posts"],
    }),
    createPost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;
