import styles from "./NavBar.module.css";

import Container from "./Container";
import MenuSelect from "./MenuSelect";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <MenuSelect />
        <SearchBox />
        <Link to="/">link</Link>
      </Container>
    </nav>
  );
}

export default NavBar;
