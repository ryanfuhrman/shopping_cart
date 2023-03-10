import React from "react";

function Cart({ cartItems }) {
  return (
    <div>
      {cartItems.map((item) => {
        return <li>{item.title}</li>;
      })}
    </div>
  );
}

export default Cart;
