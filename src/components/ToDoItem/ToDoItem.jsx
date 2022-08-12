import React, { useState } from "react";
import styles from "./ToDoItem.module.css";
import { FaEdit, FaTrashAlt, FaTimes, FaSave } from "react-icons/fa";

const ToDoItem = ({ item, toggleHandler, deleteHandler, editHandler }) => {
  const [edit, toggleEdit] = useState(false);
  const [value, setValue] = useState(item.title);

  if (edit) {
    return (
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          editHandler(item.id, value);
          toggleEdit(false);
        }}
      >
        <div className="add-to-do">
          <textarea
            type="search"
            placeholder="add todo item"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            rows="2"
            cols="30"
          />
          <button
            type="button"
            onClick={() => toggleEdit(false)}
            className="text-red-900"
          >
            <FaTimes />
          </button>
          <button type="submit" className="text-green-900">
            <FaSave />
          </button>
        </div>
      </form>
    );
  }
  return (
    <div>
      <span
        onClick={() => {
          toggleHandler(item.id);
        }}
        className={styles.todoText}
      >
        <input
          className="default:ring-2 checked:bg-green-500  mr-2 cursor-pointer"
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            toggleHandler(item.id);
          }}
          id={`todo-checkbox-${item.id}`}
        />
        <label
          className="form-check-label"
          htmlFor={`todo-checkbox-${item.id}`}
        >
          {item.title}
        </label>
      </span>
      <span
        className={styles.edit}
        onClick={() => {
          toggleEdit(true);
        }}
      >
        <FaEdit />
      </span>
      <span
        className={styles.delete}
        onClick={() => {
          deleteHandler(item.id);
        }}
      >
        <FaTrashAlt />
      </span>
    </div>
  );
};

export default ToDoItem;
