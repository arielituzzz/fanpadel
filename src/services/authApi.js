import { apiKey, authUrl } from "../firebase";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: authUrl }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signUp?key=${apiKey}`,
        method: "POST",
        body: auth,
      }),
    }),
    login: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signInWithPassword?key=${apiKey}`,
        method: "POST",
        body: auth,
      }),
    }),
    getDataUser: builder.query({
      query: (localId) => `users/${localId}.json`,
    }),
    postDataUser: builder.mutation({
      query: ({
        name,
        lastName,
        category,
        side,
        gender,
        email,
        localId,
        update,
      }) => ({
        url: `users/${localId}.json`,
        method: "PUT",
        body: {
          name: name,
          lastName: lastName,
          category: category,
          side: side,
          gender: gender,
          email: email,
          update: update,
        },
      }),
    }),
    postImageUser: builder.mutation({
      query: ({
        name,
        lastName,
        category,
        side,
        gender,
        email,
        image,
        localId,
        update,
      }) => ({
        url: `users/${localId}.json`,
        method: "PUT",
        body: {
          name: name,
          lastName: lastName,
          category: category,
          side: side,
          gender: gender,
          email: email,
          image: image,
          update: update,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useGetDataUserQuery,
  usePostDataUserMutation,
  usePostImageUserMutation,
} = authApi;
