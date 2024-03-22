import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

function TodoReset({ resetTodo }) {
  return (
    <div className="flex">
      <button
        className="mx-auto mt-3 text-white bg-red-600 py-2 px-8 rounded-sm"
        onClick={resetTodo}
      >
        <FontAwesomeIcon icon={faArrowRotateRight} className="mr-2" />
        Reset
      </button>
    </div>
  );
}

export default TodoReset;
