import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Introduce.module.scss';

export const Introduce = ({ }) => {
  return (
    <div className={classNames(styles.WrapperIntroduce)}>
      <div className={classNames(styles.Logo)}>LOGO</div>
    </div>
  )
}