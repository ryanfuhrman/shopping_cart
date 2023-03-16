import React, { useEffect } from "react";

function Cart({ cart }) {
  useEffect(() => {
    console.log(cart);
  }, []);
  return (
    <div>
      {cart.map((id) => {
        return <li key={id}>{id}</li>;
      })}
    </div>
  );
}

export default Cart;
