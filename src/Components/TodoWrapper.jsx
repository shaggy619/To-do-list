import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import { Howl } from "howler";
import soundFile from "./success.mp3";
import TodoReset from "./TodoReset";
uuidv4();

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const [isSoundOn] = useState(false);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false }]);
  };

  const resetTodo = () => {
    setTodos([]);
  };

  const handleDelete = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const playSound = () => {
    const sound = new Howl({
      src: [soundFile],
    });
    sound.play();
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    if (!isSoundOn && todos.find((todo) => todo.id === id && !todo.completed)) {
      playSound();
    }
  };

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  const allTodos = [...incompleteTodos, ...completedTodos];

  return (
    <>
      <div className="container my-0 mx-auto">
        <div className="my-0 mx-auto bg-white w-96 lg:w-2/5 relative top-28 rounded shadow-lg pb-8">
          <h2 className="text-primary text-center font-semibold text-2xl pt-6 ">
            TaskTickler
          </h2>
          <h3 className="text-center text-gray-700 pb-5 font-medium text-lg">
            Effortlessly Organize Your Day
          </h3>
          <TodoForm addTodo={addTodo} />
          {allTodos.map((todo, index) => (
            <ToDo
              task={todo}
              key={index}
              handleDelete={handleDelete}
              toggleCompletion={toggleCompletion}
            />
          ))}
          {todos.length > 0 && <TodoReset resetTodo={resetTodo} />}
        </div>
      </div>
    </>
  );
}

export default TodoWrapper;
