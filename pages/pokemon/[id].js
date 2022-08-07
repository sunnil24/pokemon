/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { API_POKEMON_IMAGE } from "../../src/constants/api";
import { loadPokemonDetails, loadPokemons } from "../../src/utils";

import styles from "../../styles/Home.module.css";

// export async function getServerSideProps({ params }) {
//   const data = await fetch(
//     API_ENDPOINT_POKEMON_LIST.replace(/index/i, `pokemon/${params.id}`)
//   );
//   return {
//     props: {
//       pokemon: await data.json(),
//       params,
//     },
//   };
// }

export async function getStaticPaths() {
  const pokemons = await loadPokemons();
  const paths = pokemons.map((pokemon) => ({
    params: { id: `${pokemon.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const pokemon = await loadPokemonDetails(params);
  return {
    props: {
      pokemon,
      params,
    },
  };
}

export default function Home({ pokemon }) {
  const { name, image, type, stats } = pokemon;

  return (
    <div className={styles.container}>
      <Head>
        <title>{name} | Pokemon</title>
      </Head>

      <main className={styles.main}>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <table className="min-w-full border">
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-4" colSpan={2}>
                  <img
                    src={`${API_POKEMON_IMAGE}/${image}`}
                    alt={name}
                    width="200"
                  />
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4">Name</td>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                  <h2>{name}</h2>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4">Type</td>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                  <ol className="list-decimal">
                    {type.map((tp, tpid) => (
                      <li key={`type-${tpid}-${tp}`}>{tp}</li>
                    ))}
                  </ol>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4">States</td>
                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                  <ol className="list-decimal">
                    {stats?.map(({ name, value }) => (
                      <li key={`states-${name}-${value}`}>
                        {name}: {value}
                      </li>
                    ))}
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link href="/">
          <a className="inline-block mt-6 px-6 pt-2.5 pb-2 bg-green-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
            Back to home
          </a>
        </Link>
      </main>
    </div>
  );
}
