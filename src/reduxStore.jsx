import { createStore } from "redux";

// create state, actions, reducer, dispatch - create store

export const counterStore = createStore((state = { counter: 0 }, action) => {
  if (action.type === "incrementby2") {
    return { counter: state.counter + 2 };
  }
  if (action.type === "decrementby2") {
    return { counter: state.counter - 2 };
  }

  return state;
});
