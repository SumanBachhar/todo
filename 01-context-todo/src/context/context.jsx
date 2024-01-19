import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useGlobalContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [number, setNumber] = useState("");
  // for update
  const [selectedTodo, setSelectedTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const addTodo = (text, number) => {
    const itemName = {
      name: text,
      age: number,
      id: Date.now(),
    };
    setTodos([...todos, itemName]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (text, number) => {
    // const updateItem = {
    //   name: text,
    //   age: number,
    //   id: Date.now(),
    // };
    setTodos({ ...selectedTodo, name: text, age: number });
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEditing) {
      addTodo(newTodo, number);
      setNewTodo("");
      setNumber("");
    } else {
      updateTodo(newTodo, number);
      setIsEditing(false);
      setNewTodo("");
      setNumber("");
    }
  };

  const handleEdit = (val) => {
    setIsEditing(true);
    const item = todos.find((todo) => todo.id === val.id);
    setTodos(item.name);
    setSelectedTodo(item);
  };

  return (
    <TodoContext.Provider
      value={{
        number,
        setNumber,
        newTodo,
        setNewTodo,
        handleSubmit,
        todos,
        removeTodo,
        handleEdit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
