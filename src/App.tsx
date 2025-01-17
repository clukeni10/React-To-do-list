import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks"
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar Programação",
    description: "20 de Janeiro às 10:00",
    isCompleted: true, 
  },
  {
    id: 2,
    title: "Estudar English",
    description: "22 de Janeiro às 10:00",
    isCompleted: false, 
  },
  {
    id: 3,
    text: "Estudar English",
    description: "26 de Janeiro às 10:00",
    isCompleted: true,
  
  } ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
      <h1 className="text-3xl text-slate-100 font-bold text-center">Task Manager</h1>
      <AddTasks></AddTasks>
      <Tasks tasks={tasks}></Tasks>
      </div>
     
    </div>
  )
}

export default App;