import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer";
import { nanoid } from "nanoid";
const TodoContext = createContext();

export const useGlbalContext = () => {
  return useContext(TodoContext);
};

const initialSatate = {
  todos: [], //{ id: nanoid(), text: " Todo msg", completed: false }
};

export const TodoProvider = ({ children }) => {
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

  return (
    <TodoContext.Provider value={{ ...state, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
