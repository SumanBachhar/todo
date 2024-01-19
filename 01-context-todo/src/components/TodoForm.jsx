import { useGlobalContext } from "../context/context";

export const TodoForm = () => {
  const { number, setNumber, newTodo, setNewTodo, handleSubmit, isEditing } =
    useGlobalContext();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add Name"
        />
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Add Age"
        />
        <button type="submit">{isEditing ? "Update" : "Submit"}</button>
      </form>
    </>
  );
};
