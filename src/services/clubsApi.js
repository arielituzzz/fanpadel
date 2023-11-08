import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase";

export const clubsApi = createApi({
  reducerPath: "clubsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getClubs: builder.query({
      query: () => "clubs.json",
    }),
    addShift: builder.mutation({
      query: ({ club }) => ({
        url: `clubs/${localId}.json`,
        method: "PUT",
        body: {
          ...club,
        },
      }),
    }),
  }),
});

export const { useGetClubsQuery, useAddShiftMutation } = clubsApi;
