import React from "react";
import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
uuidv4();

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div className="container">
        <div className="my-0 mx-auto bg-white w-96 lg:w-2/5 relative top-28 rounded shadow-lg pb-8">
          <h2 className="text-primary text-center font-semibold text-2xl py-6 ">
            Get Things Done!
          </h2>
          <TodoForm addTodo={addTodo} />
          {todos.map((todo, index) => (
            <ToDo task={todo} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoWrapper;
