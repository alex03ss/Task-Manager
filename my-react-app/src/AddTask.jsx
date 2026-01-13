import { useState } from "react";

function AddTask({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    onAddTask(task);   // send task to App
    setTask("");       // clear input
  };

  return (
    <div className="addTaskContainer">
      <h2 className="addTask">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
