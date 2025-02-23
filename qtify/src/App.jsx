import Navbar from "./components/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section.jsx";
import { Box } from "@mui/material";
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
      secondary: {
        main: "#121212",
        light: "#FFFFFF",
        dark: "#34C94B",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: theme.palette.primary.dark }}>
        <Navbar />
        <Hero />
        <Section section="top" />
        <Section section="new" />
        <Section isSong={true} section="song" />
      </Box>
    </ThemeProvider>
  );
}
