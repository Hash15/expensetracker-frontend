import { Table, TableHead, TableRow, TableCell, TableBody, IconButton, Typography, Box,} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../api/axiosClient";
  
  export default function TransactionList({ transactions, onDelete }) {
    const remove = async (id) => {
      await api.delete(`/transactions/${id}`);
      onDelete();
    };
  
    return (
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" mb={2}>
          Transactions
        </Typography>
  
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {transactions.map((t) => (
              <TableRow key={t.id}>
                <TableCell>{t.description}</TableCell>
                <TableCell>{t.amount}</TableCell>
                <TableCell>{t.date}</TableCell>
                <TableCell align="right">
                  <IconButton color="error" onClick={() => remove(t.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    );
  }
  