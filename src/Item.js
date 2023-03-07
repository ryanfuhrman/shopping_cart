import React, { useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item({ item }) {
  const { id, title, price, image } = item;

  const [cart, setCart] = useState(0);

  function handleCartValue(e) {
    setCart(e.target.value);
  }

  function lowerCount(e) {
    let currentValue = e.target.nextSibling.value;
    currentValue > 0 && setCart(Number(currentValue) - 1);
  }

  function raiseCount(e) {
    let currentValue = e.target.previousSibling.value;
    setCart(Number(currentValue) + 1);
  }

  return (
    <li key={id} className="item">
      <Link to={`/item/${id}`}>
        <h3 className="title">{title}</h3>
        <p className="price">{`$${price}`}</p>
        <img src={image} alt={`Image of ${title}`} className="image" />
      </Link>
      <div className="cart-buttons">
        <div className="cart-value-buttons">
          <button onClick={lowerCount} className="lower-cart">
            -
          </button>
          <input
            type="number"
            value={cart}
            onChange={handleCartValue}
            className="cart-input"
          />
          <button onClick={raiseCount} className="raise-cart">
            +
          </button>
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </li>
  );
}

export default Item;
