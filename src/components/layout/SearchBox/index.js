import { useNavigate } from "react-router";

import { useState } from "react";

import { StyledForm, StyledInput, StyledButton } from "./styles";
import { FaSearch } from "react-icons/fa";

function SearchBox() {
  const navigate = useNavigate();

  const [postName, setPostName] = useState();

  function searchName(e) {
    e.preventDefault();
    console.log(postName);
    navigate(`posts/name/${postName}`);
  }

  function handleInput(e) {
    setPostName(e.target.value);
  }

  return (
    <StyledForm onSubmit={searchName}>
      <StyledInput placeholder="Digite" onChange={handleInput}></StyledInput>
      <StyledButton>
        <FaSearch style={{ color: "white" }} />
      </StyledButton>
    </StyledForm>
  );
}

export default SearchBox;
