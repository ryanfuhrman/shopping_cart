import React from "react";

function Home({ inventory }) {
  return (
    <div>
      Home
      <h1>Our Shit</h1>
      <ul>
        {inventory.map(({ id, title, price, image }) => {
          return (
            <li key={id}>
              <h3>{title}</h3>
              <p>{price}</p>
              <img src={image} alt={`Image of ${title}`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
