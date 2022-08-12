import Link from "next/link";

import styles from "./Navigation.module.css";

const Nav = () => {
  return (
    <>
      <nav className="flex items-center">
        <ul className="flex">
          <li className="mr-6">
            <Link href="/">
              <a className="text-white-500 hover:text-white-800"> Home </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/pokemon">
              <a className="text-white-500 hover:text-white-800"> Pokemon </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/todo">
              <a className="text-white-500 hover:text-white-800"> Todo </a>
            </Link>
          </li>
        </ul>
        <div className="block">
          <button className="flex items-center px-3 py-2 border rounded text-white-200 border-white-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
