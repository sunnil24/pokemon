/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import classNames from "classnames";
import Image from "next/image";
import { publicImageLoader } from "../src/utils";

// export async function getServerSideProps() {
//   const data = await fetch(API_ENDPOINT_POKEMON_LIST);
//   return {
//     props: {
//       pokemons: await data.json(),
//     },
//   };
// }

// export async function getStaticProps(context) {
//   const pokemons = await loadPokemons();
//   return {
//     props: {
//       pokemons,
//     },
//   };
// }

export default function Home({ pokemons }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>HandsOn | Home</title>
      </Head>

      <main className={styles.main}>
        <img src="/" alt="" width="500px" loader={publicImageLoader} />
      </main>
    </div>
  );
}
