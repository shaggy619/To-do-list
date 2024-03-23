import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

function ToDo({ task, handleDelete, toggleCompletion }) {
  return (
    <div>
      <div
        className={`flex ${
          task.completed ? "bg-light" : "bg-primary"
        } mx-8 p-2 rounded-sm mb-2 text-white justify-between items-center`}
      >
        <div className="flex items-center">
          <div>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className={`cursor-pointer border-2 border-white rounded-full ${
                task.completed
                  ? "text-white border-secondary"
                  : "text-primary border-white"
              } hover:bg-white hover:text-primary hover:rounded-full mt-1`}
              onClick={() => toggleCompletion(task.id)}
            />
          </div>
          <p className={`mx-2 ${task.completed ? "line-through" : ""}`}>
            {task.task}
          </p>
        </div>
        <div>
          <ul className="flex">
            <li className="px-2">
              <FontAwesomeIcon
                icon={faTrash}
                className="cursor-pointer"
                onClick={() => handleDelete(task.id)}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
