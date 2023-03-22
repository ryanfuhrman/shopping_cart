import React, { useState, useEffect } from "react";

function Cart({ cartItems }) {
  const [cartList, setCartList] = useState([]);

  // if two items in cart have same id, combine them
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

  useEffect(() => {
    const sortedList = cartList.sort((a, b) => {
      return a.data.id - b.data.id;
    });
    setCartList(sortedList);
    console.log(cartList);
  }, [cartList]);

  function updateCount() {}

  return (
    <div>
      <ul>
        {cartList.map(({ data, count }) => {
          return (
            <li key={data.id} id={data.id}>
              <img src={data.images[0]} />
              <h4>{data.title}</h4>
              <p>{count}</p>
              <form className="buttons">
                <input
                  type="number"
                  onChange={updateCount}
                  value={count}
                ></input>
                <button>Remove Item</button>
              </form>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
