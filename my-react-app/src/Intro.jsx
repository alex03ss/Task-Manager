import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box, Paper } from "@mui/material";

function Intro() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/app");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={4} sx={{ p: 5, textAlign: "center", background: "rgba(30,30,30,0.85)" }}>
        <Typography variant="h2" sx={{ color: "#fff", mb: 2 }}>
          Welcome to Task Manager
        </Typography>
        <Typography variant="h6" sx={{ color: "#b2bec3", mb: 4 }}>
          Organize your tasks efficiently and boost your productivity.
        </Typography>
        <Box>
          <Button variant="contained" color="primary" size="large" onClick={handleGetStarted}>
            Get Started
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Intro;
