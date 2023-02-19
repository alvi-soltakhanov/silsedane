import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import AboutPageAsync from "pages/AboutPage/ui/AboutPage.async";
import { MainPage } from "pages/MainPage";
import MainPageAsync from "pages/MainPage/ui/MainPage.async";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./providers/themeProvider";
import './styles/index.scss'
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  console.log(classNames('app', {}, [theme]))

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to="/">Main Page</Link>
      <Link to="/about">About Page</Link>
      <AppRouter />
    </div>
  );
};

export default App;
