import React from "react";
import { Box } from "@mui/system";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <Box
      className={styles.hero}
      sx={{
        padding: "1rem",
        boxSizing: "border-box",
        flexDirection: { md: "row", xs: "column" },
      }}
    >
      <Box
        sx={{
          width: { md: "50%", xs: "100%" },
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <img
          src={require("../../assets/hero_headphones.png")}
          style={{ width: "90%" }}
          alt="headphones"
        />
      </Box>
    </Box>
  );
}

export default Hero;
