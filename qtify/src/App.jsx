import Navbar from "./components/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "./components/Hero/Hero";
// import theme from "./components/Theme/Themes";
export default function App() {
  const theme = createTheme({
    cssVariables: true,
    palette: {
      primary: {
        main: "#34C94B",
        light: "#FFFFFF",
        dark: "#121212",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
    </ThemeProvider>
  );
}
