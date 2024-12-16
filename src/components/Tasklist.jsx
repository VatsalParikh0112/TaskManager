import React, { useContext } from "react";
import { TaskContext } from "../context/Taskcontext";
import Task from "./Task";

const TaskList = () => {
  const { tasks, toggleTaskCompletion, deleteTask } = useContext(TaskContext);

  return tasks.length ? (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={() => toggleTaskCompletion(task.id)}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </ul>
  ) : (
    <p className="text-white text-center text-xl">No tasks added yet. Add some!</p>
  );
};

export default TaskList;
