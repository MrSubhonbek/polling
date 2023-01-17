import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface RootObjectNews {
  title: string;
  date: string;
  image: string;
  alias: string;
  changed: string;
}

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://media.kpfu.ru/news/export/anonse",
  }),
  endpoints: (builder) => ({
    getAllNews: builder.query<RootObjectNews[], number>({
      query: () => ``,
    }),
  }),
});
