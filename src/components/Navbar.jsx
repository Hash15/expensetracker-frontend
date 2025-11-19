import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { ColorModeContext } from "../ThemeContext";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* App Name */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Expense Tracker
        </Typography>

        <div>
          {/* Dark/Light Mode Toggle */}
          <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>

          {/* Logout Button */}
          <IconButton color="inherit" onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </div>
        
      </Toolbar>
    </AppBar>
  );
}
