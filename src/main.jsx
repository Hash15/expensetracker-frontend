import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CustomThemeProvider from "./ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>
);
