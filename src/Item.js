import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item({ item }) {
  const { id, title, price, image } = item;

  return (
    <li key={id} className="item">
      <Link to={`/item/${id}`}>
        <h3 className="title">{title}</h3>
        <p className="price">{`$${price}`}</p>
        <img src={image} alt={`Image of ${title}`} className="image" />
      </Link>
    </li>
  );
}

export default Item;
