import { createContext, useContext } from "react";

const TodoContext = createContext();

export const useGlobalContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};
