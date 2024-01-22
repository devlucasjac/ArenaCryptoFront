import { Link } from "react-router-dom";

import { useState } from "react";

import Container from "../Container/index";

function MenuSelect({ categorys }) {
  const [showBox, setShowBox] = useState(false);

  function change() {
    setShowBox(!showBox);
  }

  return (
    <>
      <button onClick={change}>😉</button>
      {showBox && (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {categorys.map((category) => (
            <li>
              <Link to={`category/${category.id}`}>{category.nome}</Link>
            </li>
          ))}
          <button onClick={change}>Fecha!</button>
        </ul>
      )}
    </>
  );
}

export default MenuSelect;
