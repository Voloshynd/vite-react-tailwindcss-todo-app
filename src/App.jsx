import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Task from "./components/Task"; 
import { getTasks } from "../api/tasks";


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(data=>{
      setTasks(data);
      })
  },[]);


 
  const handleAddTask = (task) => {
    setTasks((prev) => {
      return [...prev, task];
    });
  
  };

 

  const handleDeleteTask = id => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };


 
  return (
    <main> 
    <Header />
    <div className="flex flex-col items-center justify-center py-16">
    <NewTask onNewTask={handleAddTask} />
      {!tasks ? null : tasks.map((task) => { 
        return <Task key={task.id} id={task.id} title={task.title} description={task.description} statusTask={task.status} onRemoveTask ={handleDeleteTask}/>;
      })}
    </div>
    

    </main>
  )
}

export default App
