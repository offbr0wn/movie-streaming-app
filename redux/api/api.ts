import { ACCESS_TOKEN } from "@env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./basequery";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  refetchOnReconnect: true,
  // refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getDiscover: builder.query({
      query: (type) =>
        `/discover/${type}`,
    }),
    getTopRated: builder.query({
      query: (type) => `/${type}/top_rated`,
    }),
    getTrending: builder.query({
      query: (type) => `/trending/${type}/week?&language=en-US`,
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
    getMovieSearch: builder.query({
      query: ( query ) => `search/multi?query=${query}&include_adult=false&language=en-US`,
    })
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
  useGetMovieSearchQuery,
} = api;
