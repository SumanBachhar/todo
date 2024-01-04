import { useGlbalContext } from "../context/todocontext";

export const TodoItem = () => {
  const { todos, removeTodo, handleEdit, toggleTodo } = useGlbalContext();
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li className=" flex  items-center  " key={todo.id}>
              <p
                onClick={() => toggleTodo(todo.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: todo.completed ? "line-through" : "",
                }}
                // className={todo.completed ? "line-through" : " "}
              >
                {todo.text}
              </p>
              <button
                onClick={() => handleEdit(todo)}
                className=" text-emerald-800 bg-teal-300 rounded p-1 ml-40 mr-4"
              >
                Edit
              </button>

              <button
                onClick={() => removeTodo(todo.id)}
                className=" text-emerald-800 bg-teal-300 rounded p-1"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>

      {/* <h4>todo</h4> */}
    </>
  );
};
