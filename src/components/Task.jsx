import React from "react";

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <li
      className={`flex items-center shadow-sm justify-between px-3 py-2 border rounded-md ${
        task.completed ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <span
        onClick={onToggle}
        className={`flex-grow cursor-pointer ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </span>
      <button
        onClick={onDelete}
        className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 shadow-md "
      >
        Delete
      </button>
    </li>
  );
};

export default Task;
