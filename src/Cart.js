import React, { useState, useEffect } from "react";
import "./Cart.css";

function Cart({ cartItems }) {
  const [cartList, setCartList] = useState([]);

  function fetchItems() {
    cartItems.map((item) => {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${item.id}`
        );
        const data = await response.json();
        setCartList((prevList) => [
          ...prevList,
          { data, count: Number(item.count) },
        ]);
      };

      fetchData();
    });
  }

  useEffect(() => {
    fetchItems();
  }, []);

  function sortCartList() {
    const sortedList = cartList.sort((a, b) => {
      return a.data.id - b.data.id;
    });
    setCartList(sortedList);
  }

  useEffect(() => {
    sortCartList();
  }, [cartList]);

  function handleDeleteItem(e) {
    e.preventDefault();
    console.log(e.target[0].id);
  }

  function updateValue(e) {
    console.log(e);
  }

  function lowerCount(e) {
    console.log(e.target);
    let currentValue = e.target.nextSibling.value;
    // currentValue > 1 && setCart(Number(currentValue) - 1);
  }

  function raiseCount(e) {
    let currentValue = e.target.previousSibling.value;
    // setCart(Number(currentValue) + 1);
  }

  return (
    <div>
      <h1>Cart</h1>
      <ul className="cart-list">
        {cartList.map(({ data, count }) => {
          return (
            <li key={data.id} id={data.id} className="cart-item">
              <img src={data.images[0]} className="item-image" />
              <h4>{data.title}</h4>
              <form className="buttons" onSubmit={handleDeleteItem}>
                <button
                  onClick={lowerCount}
                  className="lower-cart"
                  type="button"
                >
                  -
                </button>
                <input
                  type="number"
                  onChange={updateValue}
                  value={count}
                  className="item-count"
                  id={data.id}
                ></input>
                <button
                  onClick={raiseCount}
                  className="raise-cart"
                  type="button"
                >
                  +
                </button>
                <button className="remove-button">Remove Item</button>
              </form>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
