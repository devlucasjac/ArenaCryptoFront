import { useNavigate } from "react-router";

import { useState } from "react";

function SearchBox() {
  const navigate = useNavigate();

  const [postName, setPostName] = useState();

  function searchName(e) {
    e.preventDefault();
    console.log(postName);
    navigate(`posts/${postName}`);
  }

  function handleInput(e) {
    setPostName(e.target.value);
  }

  return (
    <form onSubmit={searchName}>
      <input placeholder="digite" onChange={handleInput}></input>
      <button>clica</button>
    </form>
  );
}

export default SearchBox;
