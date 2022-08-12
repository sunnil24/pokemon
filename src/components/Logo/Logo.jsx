import Link from "next/link";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <h1 className={styles.logo}>
      <Link href="/">
        <a>
          <span>Made only for coding excercises</span>
        </a>
      </Link>
    </h1>
  );
}

export default Logo;
