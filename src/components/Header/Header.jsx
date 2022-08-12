import Link from "next/link";

import styles from "./Header.module.css";
import Logo from "../Logo";
import Navigation from "../Navigation";
import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
  return (
    <header className="dark:bg-slate-900 shadow-sm">
      <div className={styles.container}>
        <Logo />
        <Navigation />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
