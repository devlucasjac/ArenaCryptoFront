import { StyledNav, StyledImg, StyledDiv } from "./styles";
import image from "../../../img/NavImage-removebg.png";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../Container";
import MenuSelect from "../MenuSelect";
import SearchBox from "../SearchBox";

function NavBar() {
  const navigate = useNavigate();
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("https://crypto-arena-6ca9d8a65e1d.herokuapp.com/api/v1/categoria/", {
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

  function returnHome() {
    navigate("/");
  }

  return (
    <StyledNav>
      <Container customClass="title">
        <StyledDiv>
          <StyledImg src={image} onClick={returnHome} />
          <MenuSelect categorys={categorys} />
        </StyledDiv>
        <SearchBox />
      </Container>
    </StyledNav>
  );
}

export default NavBar;
