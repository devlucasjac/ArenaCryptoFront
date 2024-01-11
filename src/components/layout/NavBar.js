import styles from "./NavBar.module.css";

import Container from "./Container";
import MenuSelect from "./MenuSelect";
import SearchBox from "./SearchBox";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <MenuSelect />
        <SearchBox />
      </Container>
    </nav>
  );
}

export default NavBar;
