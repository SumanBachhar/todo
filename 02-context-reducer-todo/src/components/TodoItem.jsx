import { useGlbalContext } from "../context/todocontext";

export const TodoItem = () => {
  const { todos, removeTodo } = useGlbalContext();
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li className=" flex  items-center space-x-40 " key={todo.id}>
              <span>{todo.text}</span>

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
