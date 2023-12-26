import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart,setInCart]=useState(false);
  function addToCart() {
      return setInCart(true)
  }

  return (
    <li className={inCart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
