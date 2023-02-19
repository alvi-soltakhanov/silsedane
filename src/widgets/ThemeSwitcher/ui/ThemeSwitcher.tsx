import { Theme, useTheme } from "app/providers/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? "Dark" : "White"}
    </Button>
  );
};
export default ThemeSwitcher;
