import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [shoppingData, setShoppingData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://fakestoreapi.com/products");

      response.json().then((data) => {
        console.log(data);
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
