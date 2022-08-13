import React, { createContext, useReducer } from "react";
import todoReducer from "./reducers";
import * as actions from "./actions";

const initialState = {
  todos: [],
};

const StoreContext = createContext();

const StoreProvider = ({ children, todos }) => {
  const [state, dispatch] = useReducer(todoReducer, {
    ...initialState,
    todos,
  });

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { initialState, StoreContext, StoreProvider, actions };
