import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL, ACCESS_TOKEN } from "@env";

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // credentials: "same-origin",
  prepareHeaders: (headers) => {
    if (!ACCESS_TOKEN) {
      console.log("No token!");
    }

    if (ACCESS_TOKEN) {
      headers.set("Content-Type", "application/json");
      headers.set("Authorization", `Bearer ${ACCESS_TOKEN}`);
    }

    return headers;
  },
});
