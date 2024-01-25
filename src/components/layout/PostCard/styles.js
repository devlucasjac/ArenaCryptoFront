import styled from "styled-components";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)`
  margin: 0.7em;
  width: 250px;
  height: 200px;
  &:hover {
    box-shadow: 10px 10px 25px -3px rgba(0, 0, 0, 0.4);
    transform: scale(1.15);
  }
`;
