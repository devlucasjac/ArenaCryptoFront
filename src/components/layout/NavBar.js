import styles from "./NavBar.module.css";

import Container from "./Container";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <select>
          <option>selecione</option>
        </select>
        <input placeholder="digite"></input>
      </Container>
    </nav>
  );
}

export default NavBar;
