import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PostsDisplay from "../layout/PostsDisplay";

function Category() {
  const { id } = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `https://crypto-arena-6ca9d8a65e1d.herokuapp.com/api/v1/categoria/${id}/posts/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data);
        console.log("entrou", id, "aqui");
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <PostsDisplay posts={posts} />;
}

export default Category;
