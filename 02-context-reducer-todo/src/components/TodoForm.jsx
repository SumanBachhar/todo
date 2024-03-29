import { useGlbalContext } from "../context/todocontext";

export const TodoForm = () => {
  const { todo, handleSubmit, setTodo, isEditing } = useGlbalContext();

  return (
    <>
      <h1 className=" text-3xl">Hello World This is Todo App</h1>
      <form onSubmit={handleSubmit} className=" space-x-4">
        <input
          className=" border-teal-500 border-2 rounded focus:border-teal-700"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter a todo"
        />
        <button className=" bg-teal-500 text-white rounded p-1" type="submit">
          {isEditing ? "Update" : "Submit"}
        </button>
      </form>
    </>
  );
};
