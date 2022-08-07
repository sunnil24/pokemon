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
        <title>{name}</title>
      </Head>

      <main className={styles.main}>
        <div>
          <img src={`${API_POKEMON_IMAGE}/${image}`} alt={name} width="100" />
        </div>
        <div>
          <h2>{name}</h2>
          <table>
            <tbody>
              <tr>
                <th>Type</th>
                <td>
                  <ul>
                    {type.map((tp, tpid) => (
                      <li key={`type-${tpid}-${tp}`}>{tp}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <th>States</th>
                <td>
                  <ul>
                    {stats?.map(({ name, value }) => (
                      <li key={`states-${name}-${value}`}>
                        {name}: {value}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link href="/">
          <a className={styles.card}>Back to home</a>
        </Link>
      </main>
    </div>
  );
}
