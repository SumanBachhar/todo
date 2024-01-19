import { useGlobalContext } from "../context/context";

export const TodoForm = () => {
  const { todos, handleSubmit, setTodos } = useGlobalContext();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
          placeholder="Add todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};
