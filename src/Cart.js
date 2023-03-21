import React, { useState, useEffect } from "react";

function Cart({ cartItems }) {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    console.log(cartItems);
    cartItems.map((item) => {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${item.id}`
        );
        const data = await response.json();
        setCartList((prevList) => [...prevList, data]);
      };

      fetchData();
    });
  }, []);

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  return (
    <div>
      <ul>
        {cartList.map((item) => {
          return (
            <li key={item.count} id={item.count}>
              {item.count}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
