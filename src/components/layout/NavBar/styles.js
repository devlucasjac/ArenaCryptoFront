import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #3c4879;
  padding: 1em;
`;

export const StyledImg = styled.img`
  width: 70px;
  height: 70px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.4);
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;
