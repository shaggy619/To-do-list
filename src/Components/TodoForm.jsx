import React from "react";
import { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");
  const handleOnChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      addTodo(task);
      setTask("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <input
            value={task}
            onChange={handleOnChange}
            type="text"
            placeholder="What's Your Task Today?"
            className="flex-grow p-2 mb-8 ml-8 border-2 border-r-0 border-primary rounded rounded-br-none rounded-tr-none outline-none bg-secondary placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="bg-primary mb-8 mr-8  px-3 lg:px-4 py-2 text-white rounded-br rounded-tr border-2 border-primary"
          >
            Add Task
          </button>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
