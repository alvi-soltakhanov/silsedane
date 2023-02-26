import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./LangSwitcher.module.scss";
import i18n from "shared/config/i18n/i18n";
import { t } from "i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}
const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(styles.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  );
};
export default LangSwitcher;
