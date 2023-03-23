import React from "react";
import "./ItemDetail.css";
import CartButtons from "./CartButtons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetail({ handleCartItems }) {
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItem(id);
  });

  const fetchItem = async (id) => {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    const item = await response.json();
    setItem(item);
    setIsLoading(false);
  };

  return !isLoading ? (
    <div className="item-detail" id={id}>
      <h1 className="title">{item.title}</h1>
      <p className="price">{`$${item.price}`}</p>
      <img src={item.images[0]} className="image" />
      <CartButtons
        cartID={id}
        itemName={item.title}
        handleCartItems={handleCartItems}
      />
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default ItemDetail;
