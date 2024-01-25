import { useNavigate } from "react-router";

import * as React from "react";
import { useEffect } from "react";

import { StyledCard } from "./styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function PostCard({ titulo, resumo, imagem, id }) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(imagem);
  }, [titulo]);
  function sendToPage() {
    navigate(`/posts/${id}`);
  }

  return (
    <StyledCard>
      <CardActionArea onClick={sendToPage}>
        <CardMedia
          component="img"
          height="100"
          src={`https://crypto-arena-6ca9d8a65e1d.herokuapp.com${imagem}`}
          alt={titulo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {resumo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

export default PostCard;
