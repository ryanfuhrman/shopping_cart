import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./CartButtons.css";

function Item({ cartID, itemName, handleCartItems }) {
  const { id } = useParams();
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

  function addToCart(e) {
    e.preventDefault();
    handleCartItems(id);
  }

  return (
    <form className="cart-buttons" onSubmit={addToCart}>
      <div className="cart-count-buttons">
        <button onClick={lowerCount} className="lower-cart" type="button">
          -
        </button>
        <input
          type="number"
          value={cart}
          onChange={handleCartValue}
          className="cart-input"
          min="0"
        />
        <button onClick={raiseCount} className="raise-cart" type="button">
          +
        </button>
      </div>

      <button className="add-to-cart-btn" type="submit">
        Add to Cart
      </button>
    </form>
  );
}

export default Item;
