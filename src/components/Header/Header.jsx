import Link from "next/link";
import React from "react";

// import styles from "../../../styles/Header.module.css";
import styles from "../../../styles/Header.module.css";

const Header = () => {
  return (
    <header className="dark:bg-slate-900 shadow-sm">
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">
            <a>
              <span>Made only for coding excercises</span>
            </a>
          </Link>
        </h1>
        <label htmlFor="theme-switch">
          <input type="checkbox" id="theme-switch" />
          <span className="switch-label"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
