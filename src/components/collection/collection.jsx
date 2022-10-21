import React from "react";
import "./collection.scss";
import { cardData } from "../data";
import Card from "../card/card";

const Collection = () => {
  const data = cardData;
  return (
    <div className="collection">
      <div className="collection-grid">
        {data.map((item) => (
          <Card
            key={item.id}
            location={item.location}
            host={item.host}
            date={item.date}
            price={item.price}
            rating={item.rating}
            image={item.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
