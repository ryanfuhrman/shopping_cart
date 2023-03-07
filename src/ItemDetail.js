import React from "react";
import "./Item.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetail() {
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItem(id);
  });

  const fetchItem = async (id) => {
    const fetchItem = await fetch(`https://fakestoreapi.com/products/${id}`);
    const item = await fetchItem.json();
    setItem(item);
    setIsLoading(false);
  };

  return !isLoading ? (
    <div className="ItemDetail">
      <h1>{item.title}</h1>
      <p>{`$${item.price}`}</p>
      <img src={item.image} />
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default ItemDetail;
