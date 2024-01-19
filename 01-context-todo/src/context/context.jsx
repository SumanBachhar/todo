import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useGlobalContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (text) => {
    const itemName = {
      name: text,
      id: Date.now(),
    };
    setTodos([...todos, itemName]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <TodoContext.Provider value={{ todos, handleSubmit, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
