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

  const handleDelete = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div className="container my-0 mx-auto">
        <div className="my-0 mx-auto bg-white w-96 lg:w-2/5 relative top-28 rounded shadow-lg pb-8">
          <h2 className="text-primary text-center font-semibold text-2xl py-6 ">
            Conquer Your Goals!
          </h2>
          <TodoForm addTodo={addTodo} />
          {todos.map((todo, index) => (
            <ToDo
              task={todo}
              key={index}
              handleDelete={handleDelete}
              toggleCompletion={toggleCompletion}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoWrapper;
