import classNames from "classnames";
import React, { useCallback, useState } from "react";

import styles from "../../../styles/Search.module.css";

const Search = ({ searchHandler }) => {
  const handleSearch = (e) => {
    const value = e.target.value || "";
    e.preventDefault();
    searchHandler(value);
  };

  const handleInput = (e) => {
    const value = e.target.value || "";
    searchHandler(value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          onChange={handleInput}
          className={classNames(styles.input)}
          placeholder="Enter pokemon name"
          defaultValue=""
        />
        <button className={styles.button} type="submit">
          &#8594;
        </button>
      </form>
    </div>
  );
};

export default Search;
