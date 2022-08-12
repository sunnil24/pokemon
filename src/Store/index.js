import React, { createContext, useReducer } from "react";
import todoReducer from "./reducers";

const initialState = {
  todos: [],
};

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch, newValue: 1 }}>
      {children}
    </StoreContext.Provider>
  );
};

export { initialState, StoreContext, StoreProvider };
