import { classNames } from "shared/lib/classNames/classNames";
import AppLink from "shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.WrapperNavbar, {}, [])}>
      <div className={classNames(styles.Navbar, {}, [className])}>
        <div className={classNames(styles.links)}>
          <AppLink to="/" className={classNames(styles.link)}>
            Main Page
          </AppLink>
          <AppLink to="/about" className={classNames(styles.link)}>
            About Page
          </AppLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
