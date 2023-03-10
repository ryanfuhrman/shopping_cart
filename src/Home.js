import React from "react";
import "./Home.css";
import Item from "./Item";

function Home({ inventory, handleCartItems }) {
  return (
    <div>
      <h1 className="title">Our Shit</h1>
      <ul className="list">
        {inventory.map((itemData) => {
          return (
            <Item
              key={itemData.id}
              item={itemData}
              handleCartItems={handleCartItems}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
