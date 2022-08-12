import React, { useContext } from "react";
import { initialState, StoreContext } from "../store";

const useStore = () => {
  console.log(useContext(StoreContext), "---");
  const { state, dispatch } = useContext(StoreContext) || {
    state: initialState,
    dispatch() {},
  };
  return [state, dispatch];
};

export default useStore;
