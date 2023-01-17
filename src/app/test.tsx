import { newsApi } from "@/store/services/NewsService";
import React from "react";

export const Test = () => {
  const {
    data: news,
    isLoading,
    refetch,
  } = newsApi.useGetAllNewsQuery(1, {
    pollingInterval: 180000,
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (!news) return <h1>Empty data</h1>;
  console.log(news);

  return (
    <div>
      <h1
        onClick={() => {
          refetch();
        }}
      >
        refetch
      </h1>
      {news.map((news) => (
        <div>{news.title}</div>
      ))}
    </div>
  );
};
