import React from "react";
import "./Home.css";

function Home({ inventory }) {
  return (
    <div>
      <h1 className="title">Our Shit</h1>
      <ul className="list">
        {inventory.map(({ id, title, price, image }) => {
          return (
            <li key={id} className="list-item">
              <h3 className="title">{title}</h3>
              <p className="price">{`$${price}`}</p>
              <img src={image} alt={`Image of ${title}`} className="image" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
