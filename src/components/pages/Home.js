import { useState, useEffect } from "react";

import Container from "../layout/Container";
import PostCard from "../layout/PostCard";

function Home({ url }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container customClass="center">
      {posts.map((post) => (
        <PostCard
          id={post.id}
          titulo={post.titulo}
          resumo={post.resumo}
          imagem={post.imagem}
        ></PostCard>
      ))}
    </Container>
  );
}

export default Home;
