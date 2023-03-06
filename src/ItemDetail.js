import React from "react";
import "./Item.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetail() {
  const { id } = useParams();

  useEffect(() => {
    fetchItem(id);
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async (id) => {
    const fetchItem = await fetch(`https://fakestoreapi.com/products/${id}`);
    const item = await fetchItem.json();
    setItem(item);
  };

  return (
    <div className="ItemDetail">
      <h1>{item.title}</h1>
      <p>{`$${item.price}`}</p>
      <img src={item.image} />
    </div>
  );
}

export default ItemDetail;
