import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <Link href="/">
        <a> Home </a>
      </Link>
      <Link href="/about">
        <a> Pokemon </a>
      </Link>
    </div>
  );
};

export default Nav;
