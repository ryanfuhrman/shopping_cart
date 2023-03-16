import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [shoppingData, setShoppingData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://fakestoreapi.com/products");

      response.json().then((data) => {
        setShoppingData(data);
      });
    }

    getData();
  }, []);

  function handleCartItems(id) {
    setCartItems([...cartItems, id]);
    console.log(cartItems);
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
          <Route path="/cart" element={<Cart cart={cartItems} />} />
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
