import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [shoppingData, setShoppingData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");

      response.json().then((data) => {
        setShoppingData(data);
      });
    }

    getData();
  }, []);

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
    // console.log(cartItems);
  }, [cartItems]);

  function handleCartItems(id, count) {
    setCartItems([...cartItems, { id, count }]);
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                inventory={shoppingData}
                handleCartItems={handleCartItems}
              />
            }
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route
            path="/item/:id"
            element={<ItemDetail handleCartItems={handleCartItems} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
