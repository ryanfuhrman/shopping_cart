import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <h3 className="header">Shopping Cart</h3>
      <ul className="link-list">
        <Link to="/" className="link">
          <li className="linkItem">Home</li>
        </Link>
        <Link to="/cart" className="link">
          <li className="linkItem">Cart</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
