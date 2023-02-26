import React, { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className,])}>
      <button onClick={onToggle}>Нажать</button>
      <div className="switchers">
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

