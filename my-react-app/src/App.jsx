import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Footer from "./Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on first render
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1 className="Header">Task Manager</h1>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
      <Footer />
    </>
  );
}

export default App;
