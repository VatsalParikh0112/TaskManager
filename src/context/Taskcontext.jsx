import React, { createContext, useState } from "react";

// Create Context
export const TaskContext = createContext();

// Provide Context
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskCompletion, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
