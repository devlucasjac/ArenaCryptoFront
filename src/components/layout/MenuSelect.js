import { Link } from "react-router-dom";

import { useState } from "react";

function MenuSelect({ categorys }) {
  const [showBox, setShowBox] = useState(false);

  function change() {
    setShowBox(!showBox);
  }

  return (
    <>
      <button onClick={change}>😉</button>
      {showBox && (
        <div>
          <Link to="/">Home</Link>
          {categorys.map((category) => (
            <Link to={`category/${category.id}`}>{category.nome}</Link>
          ))}
          <button onClick={change}>Fecha!</button>
        </div>
      )}
    </>
  );
}

export default MenuSelect;
