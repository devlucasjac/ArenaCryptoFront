import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledUl = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 1;
  padding: 3px;
  transform: translate(75px, 55px);
  border: 1px solid #aaa;
  border-radius: 5%;
  background-color: #ddd;
  box-shadow: 1px 1px 3px 0px #444;
`;

export const StyledDiv = styled.div`
  min-width: 10px;
  height: 25px;
  padding: 3px 3px 0 4px;
  border-radius: 5%;

  &:hover {
    background-color: #89d;
  }
`;

export const StyledLi = styled.li`
  &:hover {
    background-color: #bbb;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: #222;
`;
