import React from "react";

function Cart({ cart }) {
  return (
    <div>
      {cart.map((id) => {
        return <li key={id}>{id}</li>;
      })}
    </div>
  );
}

export default Cart;
