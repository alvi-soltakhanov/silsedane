import { RouteProps } from "react-router-dom";
import { DictionaryPage } from "pages/DictionaryPage";
import { MainPage } from "pages/MainPage";
import NewsPage from "pages/NewsPage/ui/NewsPage";

export enum AppRoutes {
  MAIN = "main",
  DICTIONARY = "dictionary",
  NEWS = "news",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.DICTIONARY]: '/dictionary',
  [AppRoutes.NEWS]: '/news',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.DICTIONARY]: {
    path: RoutePath.dictionary,
    element: <DictionaryPage />,
  },
  [AppRoutes.NEWS]: {
    path: RoutePath.news,
    element: <NewsPage />,
  },
};
