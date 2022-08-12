/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";

import classNames from "classnames";
import { StoreProvider } from "../src/Store";
import AddToDo from "../src/components/AddToDo";
import ToDoList from "../src/components/ToDoList";

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

const Todo = ({ pokemons }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HandsOn | ToDo</title>
      </Head>

      <main className={styles.main}>
        <StoreProvider>
          <AddToDo />
          <ToDoList />
        </StoreProvider>
      </main>
    </div>
  );
};

export default Todo;
