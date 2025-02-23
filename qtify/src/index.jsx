import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App.jsx";
import "./index.css";
const root = createRoot(document.querySelector("#root"));
const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: '"Poppins", serif',
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: '"Poppins", serif !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Poppins", serif !important',
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#34C94B",
      light: "#FFFFFF",
      dark: "#121212",
    },
    secondary: {
      main: "#121212",
      light: "#FFFFFF",
      dark: "#34C94B",
    },
  },
});
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);
