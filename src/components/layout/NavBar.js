import styles from "./NavBar.module.css";

import { useState, useEffect } from "react";

import Container from "./Container";
import MenuSelect from "./MenuSelect";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

function NavBar() {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/categoria/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategorys(data);
        console.log(categorys);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <nav className={styles.navbar}>
      <Container>
        <MenuSelect categorys={categorys} />
        <SearchBox />
      </Container>
    </nav>
  );
}

export default NavBar;
