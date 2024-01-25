import { useState, useEffect } from "react";

import PostsDisplay from "../layout/PostsDisplay";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://crypto-arena-6ca9d8a65e1d.herokuapp.com/api/v1/post/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  });

  return <PostsDisplay posts={posts} />;
}

export default Home;
