import { useState, useEffect } from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
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
    <Container maxWidth="sm" sx={{ mt: 4, position: 'relative', zIndex: 2 }}>
      <Paper elevation={3} sx={{ p: 3, background: 'rgba(255,255,255,0.08)', boxShadow: 3, backdropFilter: 'blur(20px)' }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ color: '#fff' }}>
          Task Manager
        </Typography>
        <Box sx={{ mb: 2, background: 'transparent' }}>
          <AddTask onAddTask={addTask} />
        </Box>
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </Paper>
      <Box sx={{ mt: 4 }}>
        <Footer />
      </Box>
    </Container>
  );
}

export default App;
