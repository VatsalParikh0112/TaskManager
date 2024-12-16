import React from "react";
import { TaskProvider } from "./context/Taskcontext";
import AddTask from "./components/Addtask";
import TaskList from "./components/Tasklist";
import "./App.css";

function App() {
  return (
    <>
      <TaskProvider>
        <div className="flex justify-center items-center py-[100px] ">
          <div className="flex flex-col space-y-[10px] justify-center w-[50vw] ">
            <div className="flex justify-center py-[30px] border rounded-lg bg-slate-300 shadow-lg ">
              <h1 className=" text-6xl font-bold ">Task-Manager</h1>
            </div>
            <div className="flex flex-col justify-center py-[50px] space-y-[20px] ">
              <h1 className=" text-4xl font-semibold text-center ">Task List</h1>
              <AddTask />
              <TaskList />
            </div>
          </div>
        </div>
      </TaskProvider>
    </>
  );
}

export default App;
