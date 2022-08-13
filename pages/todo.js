/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { StoreProvider } from "../src/store";
import AddToDo from "../src/components/AddToDo";
import ToDoList from "../src/components/ToDoList";
import { loadToDos } from "../src/utils";

// export async function getServerSideProps() {
//   const data = await fetch(API_ENDPOINT_POKEMON_LIST);
//   return {
//     props: {
//       pokemons: await data.json(),
//     },
//   };
// }

export async function getStaticProps(context) {
  const todos = await loadToDos();
  return {
    props: {
      todos,
    },
  };
}

const Todo = ({ todos }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HandsOn | ToDo</title>
      </Head>

      <main className={styles.main}>
        <StoreProvider todos={todos}>
          <AddToDo />
          <ToDoList />
        </StoreProvider>
      </main>
    </div>
  );
};

export default Todo;
