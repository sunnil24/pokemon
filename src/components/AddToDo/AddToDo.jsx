import React, { useState, useCallback, useContext } from "react";
import { StoreContext } from "../../store";
import { addToDoItem } from "../../store/actions";
import styles from "./AddToDo.module.css";
import { FaEdit, FaTrashAlt, FaTimes, FaSave } from "react-icons/fa";

const AddToDo = () => {
  const { state, dispatch } = useContext(StoreContext);
  const [value, setValue] = useState("");

  const addToDo = useCallback(
    (e) => {
      e.preventDefault();
      setValue("");
      if (value) {
        addToDoItem(dispatch, {
          userId: state.todos.length + 1,
          id: state.todos.length + 1,
          title: value,
          completed: false,
        });
      }
    },
    [value]
  );

  return (
    <div className={styles.todoHeader}>
      <form method="post" onSubmit={addToDo}>
        <div className={styles.addToDo}>
          <textarea
            type="search"
            placeholder="add todo item"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            rows="4"
            cols="30"
            className={styles.textarea}
            autoComplete={false}
          />
          <button type="submit">
            <FaSave />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToDo;
