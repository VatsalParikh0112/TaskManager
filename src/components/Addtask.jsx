import React, { useState, useContext } from "react";
import { TaskContext } from "../context/Taskcontext";

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm focus:shadow-md "
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 shadow-sm focus:shadow-md "
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
