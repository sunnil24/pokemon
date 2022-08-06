import React, { useCallback, useState } from "react";

import styles from "../../../styles/search.module.css";

const Search = ({ searchHandler }) => {
  const [value, setValue] = useState("");

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      searchHandler(value);
    },
    [value]
  );

  const handleInput = useCallback((e) => {
    setValue(e.target.value || "");
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch}>
        <h1 className="underline py-2 outline outline-offset-2 outline-1 border border-gray-800 bg-gray-300">
          Favorite Pokemon
        </h1>

        <input
          type="search"
          onChange={handleInput}
          value={value}
          className="underline py-2 outline outline-offset-2 outline-1 border border-gray-800 bg-gray-300"
        />
        <button
          type="submit"
          className="underline py-2 outline outline-offset-2 outline-1 border border-gray-800 bg-gray-300"
        >
          &#8594;
        </button>
      </form>
    </div>
  );
};

export default Search;
