import { useState, useEffect } from "react";

import Container from "../layout/Container";
import PostCard from "../layout/PostCard";
import Loading from "../layout/Loading";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/post/", {
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
      {posts ? (
        <>
          {posts.map((post) => (
            <PostCard
              id={post.id}
              titulo={post.titulo}
              resumo={post.resumo}
              imagem={post.imagem}
            ></PostCard>
          ))}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

export default Home;
