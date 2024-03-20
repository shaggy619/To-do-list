import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ToDo({ task }) {
  return (
    <div>
      <div className="flex bg-primary mx-8 p-2 rounded-sm mb-2 text-white justify-between">
        <p>{task.task}</p>
        <div>
          <ul className="flex">
            <li className="px-2 cursor-pointer">
              <FontAwesomeIcon icon={faPenToSquare} />
            </li>
            <li className="px-2 cursor-pointer">
              <FontAwesomeIcon icon={faTrash} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
