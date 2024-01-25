import PostsDisplay from "../../layout/PostsDisplay";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function NamePost() {
  const { name } = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/v1/post?title=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, name);
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, [name]);

  return <PostsDisplay posts={posts} />;
}

export default NamePost;
