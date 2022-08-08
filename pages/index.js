/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { API_POKEMON_IMAGE, MIN_POKEMON_ON_PAGE } from "../src/constants/api";
import styles from "../styles/Home.module.css";
import Search from "../src/components/search";
import classNames from "classnames";
import { imageLoader, loadPokemons } from "../src/utils";
import Image from "next/image";

// export async function getServerSideProps() {
//   const data = await fetch(API_ENDPOINT_POKEMON_LIST);
//   return {
//     props: {
//       pokemons: await data.json(),
//     },
//   };
// }

export async function getStaticProps(context) {
  const pokemons = await loadPokemons();
  return {
    props: {
      pokemons,
    },
  };
}

export default function Home({ pokemons }) {
  const [pokemonList, updatePokenList] = useState(pokemons);
  const [currentCount, setCurrentCount] = useState(MIN_POKEMON_ON_PAGE);

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
        <title>Pokemon | Home</title>
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>Pokemon</h3>
        <Search searchHandler={handleSearch} />
        <div className={styles.grid}>
          {paginationPokmon.map(({ id, image, name }) => (
            <Link href={`./pokemon/${encodeURIComponent(id)}`} key={id}>
              <a className={styles.card}>
                <Image
                  src={image}
                  alt={name}
                  loader={imageLoader}
                  width="300"
                  height="300"
                />
                <h2>{name}</h2>
              </a>
            </Link>
          ))}
        </div>
        {pokemonList.length > currentCount && (
          <button
            className="inline-block mt-6 px-6 pt-2.5 pb-2 bg-green-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
            onClick={handlePagination}
          >
            Load More
          </button>
        )}
      </main>
    </div>
  );
}
