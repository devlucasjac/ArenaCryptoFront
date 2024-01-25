import styles from "./Post.module.css";

import Container from "../layout/Container";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  const [post, setPost] = useState();

  useEffect(() => {
    fetch(`https://crypto-arena-6ca9d8a65e1d.herokuapp.com/api/v1/post/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPost(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container customClass="start">
      {post && (
        <div>
          <h1>{post.titulo}</h1>
          <h3>{post.category.nome}</h3>
          <Container customClass="center">
            <img
              src={`https://crypto-arena-6ca9d8a65e1d.herokuapp.com${post.imagem}`}
              alt={post.titulo}
              className={styles.image_post}
            />
          </Container>
          <h4>{post.resumo}</h4>
          <p style={{ margin: "10px" }}>{post.texto}</p>
        </div>
      )}
    </Container>
  );
}

export default Post;
