import { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosClient";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    fullName: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Username may be taken.");
    }
  };

  return (
    <>
    <Typography variant="h3"
            align="center"
            sx={{ mb: 4, mt: 4, fontWeight: "bold", color: "primary.main" }}>
            Expense Tracker
        </Typography>
    <Box sx={{ maxWidth: 380, mx: "auto" }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" mb={2}>
          Register
        </Typography>

        <form onSubmit={handleRegister}>
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <TextField
            label="Username"
            fullWidth
            margin="normal"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {error && <Typography color="error">{error}</Typography>}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, py: 1 }}
          >
            Register
          </Button>

          <Button
            variant="text"
            fullWidth
            sx={{ mt: 1 }}
            onClick={() => navigate("/login")}
          >
            Already have an account? Login
          </Button>
        </form>
      </Paper>
    </Box>
    </>
  );
}
