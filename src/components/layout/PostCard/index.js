import { useNavigate } from "react-router";

import * as React from "react";
import { StyledCard } from "./styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function PostCard({ titulo, resumo, imagem, id }) {
  const navigate = useNavigate();

  function sendToPage() {
    navigate(`/posts/${id}`);
  }

  return (
    <StyledCard>
      <CardActionArea onClick={sendToPage}>
        <CardMedia
          component="img"
          height="100"
          src={`http://127.0.0.1:8000/${imagem}`}
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
