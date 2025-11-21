import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import api from "../api/axiosClient";

export default function AddTransactionForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/transactions", {
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString().slice(0, 10),
    });

    setDescription("");
    setAmount("");
    onAdd();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6">Add Transaction</Typography>

      <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
        <TextField
          label="Description"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <TextField
          type="number"
          label="Amount (+income, -expense)"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <Button type="submit" variant="contained" sx={{ px: 4 }}>
          Add
        </Button>
      </Box>
    </Box>
  );
}
