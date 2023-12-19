import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Services.module.scss';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

export const Services = () => {
  return (
    <div className={classNames(styles.WrapperServices, {}, [])}>
      <div className={classNames(styles.Service, {}, [])}>
        <LangSwitcher />
      </div>
      <div className={classNames(styles.Service, {}, [])}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
