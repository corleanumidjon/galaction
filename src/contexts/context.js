import { createContext, useReducer } from "react";

const initialState = {};

const reducer = (state, action) => {
  return state;
};

export const Context = createContext();

export const Provider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
