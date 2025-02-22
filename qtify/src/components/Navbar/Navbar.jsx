import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { useRef } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  //TODO: fetch the data for the navbar UL ListElement.
  const searchData = useRef(null);
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search
        searchData={searchData}
        placeholder="Search a album of your choice"
      />
      <Button
        variant="contained"
        backgroundColor="var(--mui-palette-primary-dark)"
        color="var(--mui-palette-primary-main)"
        fontWeight="bold"
        size="small"
      >
        Give Feedback
      </Button>
    </nav>
  );
}
