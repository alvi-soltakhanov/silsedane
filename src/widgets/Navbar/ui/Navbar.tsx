import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { Introduce } from './Introduce';
import { Menu } from './Menu';
import { Services } from './Services';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.WrapperNavbar, {}, [])}>
      <div className={classNames(styles.Navbar, {}, [className])}>
        <Introduce />
        <Menu />
        <Services />
      </div>
    </div>
  );
};

export default Navbar;
