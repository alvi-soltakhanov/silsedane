import { lazy } from "react";

const NewsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import("./NewsPage")), 1500);
    })
);
export default NewsPageAsync;
