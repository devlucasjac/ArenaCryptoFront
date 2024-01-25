import { useState } from "react";

import { StyledUl, StyledLi, StyledLink, StyledDiv } from "./styles.js";
import { FaAlignJustify } from "react-icons/fa";

function MenuSelect({ categorys }) {
  const [showBox, setShowBox] = useState(false);

  function change() {
    setShowBox(!showBox);
  }

  return (
    <>
      <StyledDiv onClick={change}>
        <FaAlignJustify style={{ color: "white" }} />
      </StyledDiv>
      {showBox && (
        <StyledUl>
          <StyledLi>
            <StyledLink to="/">Home</StyledLink>
          </StyledLi>
          {categorys.map((category) => (
            <StyledLi>
              <StyledLink to={`category/${category.id}`}>
                {category.nome}
              </StyledLink>
            </StyledLi>
          ))}
        </StyledUl>
      )}
    </>
  );
}

export default MenuSelect;
