/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  API_ENDPOINT_POKEMON_LIST,
  API_POKEMON_IMAGE,
  MIN_POKEMON_ON_PAGE,
} from "../src/constants/api";
import styles from "../styles/Home.module.css";
import Search from "../src/components/search";
import classNames from "classnames";

export async function getServerSideProps() {
  const data = await fetch(API_ENDPOINT_POKEMON_LIST);
  return {
    props: {
      pokemons: await data.json(),
    },
  };
}

export default function Home({ pokemons }) {
  const [pokemonList, updatePokenList] = useState([]);
  const [currentCount, setCurrentCount] = useState(MIN_POKEMON_ON_PAGE);

  useEffect(() => {
    updatePokenList(pokemons);
  }, [pokemons]);

  const handleSearch = (text) => {
    const regex = new RegExp(text, "ig");
    updatePokenList(pokemons.filter((pokemon) => regex.test(pokemon.name)));
  };

  const handlePagination = useCallback(() => {
    setCurrentCount(currentCount + MIN_POKEMON_ON_PAGE);
  }, [currentCount]);

  const paginationPokmon = pokemonList.slice(0, currentCount);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon Demo</title>
      </Head>

      <main className={styles.main}>
        <h1 className={classNames(styles.title)}>Favorite Pokemon</h1>
        <Search searchHandler={handleSearch} />
        <div className={styles.grid}>
          {paginationPokmon.map(({ id, image, name }) => (
            <Link href={`/pokemon/${encodeURIComponent(id)}`} key={id}>
              <a className={styles.card}>
                <img src={`${API_POKEMON_IMAGE}/${image}`} alt={name} />
                <h2>{name}</h2>
              </a>
            </Link>
          ))}
        </div>
        {pokemonList.length > currentCount && (
          <button className={styles.loadmore} onClick={handlePagination}>
            Load More
          </button>
        )}
      </main>
    </div>
  );
}
