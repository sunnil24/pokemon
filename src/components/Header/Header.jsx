import React from "react";

// import styles from "../../../styles/Header.module.css";
import styles from "../../../styles/Header.module.css";

const Header = () => {
  return (
    <header className="dark:bg-slate-900 shadow-sm">
      <div className={styles.container}>
        <h1 className={styles.logo}>Pokemon</h1>
        <label htmlFor="theme-switch">
          <input type="checkbox" id="theme-switch" />
          <span className="switch-label"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
