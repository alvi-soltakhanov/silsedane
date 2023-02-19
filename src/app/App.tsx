import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/themeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <AppRouter />
      <Navbar />
    </div>
  );
};

export default App;
