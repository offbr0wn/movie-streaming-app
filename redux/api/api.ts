import { ACCESS_TOKEN } from "@env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./basequery";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getDiscover: builder.query({
      query: (type) =>
        `/discover/${type}?&language=en-US`,
    }),
    getTopRated: builder.query({
      query: (type) => `/${type}/top_rated`,
    }),
    getTrending: builder.query({
      query: (type) => `/trending/${type}/day`,
    }),
    getPopular: builder.query({
      query: (type) => `/${type}/popular`,
    }),
    getNowTopAiring: builder.query({
      query: ({ type, page }) => `/${type}/${page}`,
    }),
    getDetails: builder.query({
      query: ({ type, id }) => `/${type}/${id}`,
    }),
    getCredits: builder.query({
      query: ({ type, id }) => `/${type}/${id}/credits`,
    }),
    getSimilar: builder.query({
      query: ({ type, id }) => `/${type}/${id}/similar?language=en-US&page=1`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetDiscoverQuery,
  useGetTrendingQuery,
  useGetPopularQuery,
  useGetNowTopAiringQuery,
  useGetDetailsQuery,
  useGetCreditsQuery,
  useGetTopRatedQuery,
  useGetSimilarQuery,
} = api;
