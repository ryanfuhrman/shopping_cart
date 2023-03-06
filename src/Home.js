import React from "react";
import "./Home.css";
import Item from "./Item";

function Home({ inventory }) {
  return (
    <div>
      <h1 className="title">Our Shit</h1>
      <ul className="list">
        {inventory.map((itemData) => {
          return <Item key={itemData.id} item={itemData} />;
        })}
      </ul>
    </div>
  );
}

export default Home;
