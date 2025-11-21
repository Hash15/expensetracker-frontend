import { useEffect, useState } from "react";
import api from "../api/axiosClient";
import AddTransactionForm from "../components/AddTransactionForm";
import TransactionList from "../components/TransactionList";
import { Box, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DashboardPage() {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  const loadTransactions = async () => {
    try {
      const res = await api.get("/transactions");
      setTransactions(res.data);
    } catch {
      navigate("/login");
    }
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <> <Navbar /> 
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4">Dashboard</Typography>
          <Button color="error" onClick={logout}>
            Logout
          </Button>
        </Box>

        <AddTransactionForm onAdd={loadTransactions} />
        <TransactionList transactions={transactions} onDelete={loadTransactions} />
      </Paper>
    </Box>
    </>
  );
}
