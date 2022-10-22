import React, { useEffect } from "react";
import "./collection.scss";
import { cardData } from "../data";
import Card from "../card/card";
import { useSelector } from "react-redux";

const Collection = () => {
  const data = cardData;

  const filterValue = useSelector((state) => state.filter.value);

  useEffect(() => {
    document.title = "Vacation Homes";
  }, []);

  const collectionData = data.filter((item) => {
    if (filterValue === 0) {
      return item;
    } else {
      return item.type === filterValue;
    }
  });

  return (
    <div className="collection">
      <div className="collection-grid">
        {collectionData.map((item) => (
          <Card
            key={item.id}
            location={item.location}
            host={item.host}
            date={item.date}
            price={item.price}
            rating={item.rating}
            images={item.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
