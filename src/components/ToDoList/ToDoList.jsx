import React, { useEffect, useCallback, useState, useContext } from "react";
import { StoreContext } from "../../store";
import { fetchToDos, updateToDos } from "../../store/actions";
import styles from "./ToDoList.module.css";

import ToDoItem from "../ToDoItem";
import classNames from "classnames";

export default function ToDoList() {
  const { state, dispatch } = useContext(StoreContext);
  const [page, setPage] = useState(1);
  const { todos } = state;

  const toggleToDo = useCallback(
    (id) => {
      const newData = todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      updateToDos(dispatch, newData);
    },
    [todos]
  );

  const deleteToDo = useCallback(
    (id) => {
      const newData = todos.filter((item) => item.id !== id);
      updateToDos(dispatch, newData);
    },
    [todos]
  );

  const editHandler = useCallback(
    (id, title) => {
      const newData = todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title,
          };
        }
        return item;
      });
      updateToDos(dispatch, newData);
    },
    [todos]
  );

  return (
    <>
      <ol className={classNames(styles.todoList, "list-decimal")}>
        {todos
          ?.sort((todo1, todo2) => todo2.id - todo1.id)
          .filter((item, index) => {
            return index < page * 10 && item;
          })
          .map((item) => (
            <li
              key={`${item.userId}-${item.title}`}
              className={item.completed ? styles.completed : ""}
            >
              <ToDoItem
                item={item}
                toggleHandler={toggleToDo}
                deleteHandler={deleteToDo}
                editHandler={editHandler}
              />
            </li>
          ))}
      </ol>
      <section className={styles.pagination}>
        {page * 10 < todos?.length && (
          <button
            className="inline-block mt-6 px-6 pt-2.5 pb-2 bg-green-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
            type="button"
            onClick={() => setPage((prevPage) => prevPage + 1)}
          >
            Load More
          </button>
        )}
      </section>
    </>
  );
}
