import { classNames } from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/AppLink/AppLink';
import styles from './Menu.module.scss';
import { useTranslation } from 'react-i18next';

export const Menu = () => {
  const { t } = useTranslation('main');

  return (
    <div className={classNames(styles.WrapperMenu)}>
      <div className={classNames(styles.links)}>
        <AppLink to='/' className={classNames(styles.link)}>
          {t('главная')}
        </AppLink>
        <AppLink to='/dictionary' className={classNames(styles.link)}>
          {t('словарь')}
        </AppLink>
        <AppLink to='/news' className={classNames(styles.link)}>
          {t('новости')}
        </AppLink>
      </div>
    </div>

  )
}