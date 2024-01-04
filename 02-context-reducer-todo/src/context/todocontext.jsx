import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "../reducer";
import { nanoid } from "nanoid";
const TodoContext = createContext();

export const useGlbalContext = () => {
  return useContext(TodoContext);
};

const initialSatate = {
  todos: [], //{ id: nanoid(), text: " Todo msg", completed: false }
  updated: [],
};

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState("");
  const [selectedTodo, setSelectedTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialSatate);

  const addTodo = (todo) => {
    dispatch({
      type: "ADD_TODO",
      payload: { id: nanoid(), text: todo },
    });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const updateTodo = (todo) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: { ...selectedTodo, text: todo },
    });
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEditing) {
      addTodo(todo);
      setTodo("");
    } else {
      updateTodo(todo);
      setIsEditing(false);
      setTodo("");
    }
  };

  const handleEdit = (val) => {
    setIsEditing(true);
    const item = state.todos.find((todo) => todo.id === val.id);
    setTodo(item.text);
    setSelectedTodo(item);
  };
  return (
    <TodoContext.Provider
      value={{
        ...state,
        todo,
        setTodo,
        addTodo,
        handleSubmit,
        handleEdit,
        removeTodo,
        updateTodo,
        isEditing,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
