import { Link } from "react-router-dom";

import styles from "./PostCard.module.css";

function PostCard({ titulo, resumo, imagem, id, handleClick }) {
  return (
    <Link to={`/posts/${id}`}>
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <span>{resumo}</span>
    </Link>
  );
}

export default PostCard;
