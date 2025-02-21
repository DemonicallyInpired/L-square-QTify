import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search placeholder="Search a album of your choice" />
      <Button variant="contained">Give Feedback</Button>
    </nav>
  );
}
