import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import CartButtons from "./CartButtons";

function Item({ item, handleCartItems }) {
  const { id, title, price, image } = item;

  return (
    <li key={id} id={id} className="item">
      <Link to={`/item/${id}`}>
        <h3 className="title">{title}</h3>
        <p className="price">{`$${price}`}</p>
        <img src={image} alt={`Image of ${title}`} className="image" />
      </Link>
      <CartButtons
        cartID={id}
        itemName={title}
        handleCartItems={handleCartItems}
      />
    </li>
  );
}

export default Item;
