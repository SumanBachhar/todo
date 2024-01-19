import { useGlobalContext } from "../context/context";

export const TodoItem = () => {
  const { todos, removeTodo, handleEdit } = useGlobalContext();
  return (
    <>
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <p>{todo.name}</p>
                <p>{todo.age}</p>
                <button onClick={() => removeTodo(todo.id)}>Delete</button>
                <button onClick={() => handleEdit(todo)}>Update</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
