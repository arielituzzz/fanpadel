import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase";

export const clubsApi = createApi({
  reducerPath: "clubsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getClubs: builder.query({
      query: () => "clubs.json",
    }),
    // getProducts: builder.query({
    //   query: () => "products.json",
    // }),
    // getProductsByCategory: builder.query({
    //   query: (category) =>
    //     `products.json?orderBy="category"&equalTo="${category}"`,
    // }),
    // postOrder: builder.mutation({
    //   query: ({ ...order }) => ({
    //     url: "orders.json",
    //     method: "POST",
    //     body: order,
    //   }),
    // }),
    // getDataUser: builder.query({
    //   query: (localId) => `users/${localId}.json`,
    // }),
    // postDataUser: builder.mutation({
    //   query: ({ name, lastName, gender, email, localId, update }) => ({
    //     url: `users/${localId}.json`,
    //     method: "PUT",
    //     body: {
    //       name: name,
    //       lastName: lastName,
    //       gender: gender,
    //       email: email,
    //       update: update,
    //     },
    //   }),
    // }),
    // postImageUser: builder.mutation({
    //   query: ({ name, lastName, gender, email, image, localId, update }) => ({
    //     url: `users/${localId}.json`,
    //     method: "PUT",
    //     body: {
    //       name: name,
    //       lastName: lastName,
    //       gender: gender,
    //       email: email,
    //       image: image,
    //       update: update,
    //     },
    //   }),
    // }),
  }),
});

export const {
  useGetClubsQuery,
  // useGetProductsQuery,
  // useGetProductsByCategoryQuery,
  // usePostOrderMutation,
  // useGetDataUserQuery,
  // usePostDataUserMutation,
  // usePostImageUserMutation,
} = clubsApi;
