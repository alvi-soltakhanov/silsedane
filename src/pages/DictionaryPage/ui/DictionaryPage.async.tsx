import { lazy } from "react";

const DictionaryPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import("./DictionaryPage")), 1500);
    })
);
export default DictionaryPageAsync;
