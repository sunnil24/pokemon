import { FETCH_TODOS, UPDATE_TODOS, ADD_TODO } from "./actions-types";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_TODOS:
    case UPDATE_TODOS: {
      debugger;
      const {
        payload: { data },
      } = action;
      return {
        todos: data,
      };
    }
    case ADD_TODO: {
      const {
        payload: { data },
      } = action;
      return {
        todos: [...state.todos, data],
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
