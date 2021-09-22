import React, {useState} from "react";

function Item({ name, category }) {

  const [Cart, setCart] = useState(false);
  const inCart = Cart ? "in-cart" : null;
  const cartColor = Cart ? "remove" : "add";

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartColor} onClick={() => setCart(!Cart)}>{Cart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
