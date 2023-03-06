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
      const response = await fetch("https://fakestoreapi.com/products");

      response.json().then((data) => {
        setShoppingData(data);
      });
    }

    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home inventory={shoppingData} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
