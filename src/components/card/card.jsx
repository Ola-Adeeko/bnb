import React from "react";
import "./card.scss";
import { MdOutlineStar } from "react-icons/md";

const Card = ({ rating, location, host, date, price, image }) => {
  return (
    <div className="card">
      <div className="card-box">
        <div className="card-scroll">
          <img src={image[0]} alt="img" />{" "}
        </div>
        <div className="card-body">
          <div className="card-left">
            <span className="location">{location}</span>
            <span className="host">Hosted by {host}</span>
            <span className="date">{date}</span>
            <span className="price">
              ${price} <span className="price-night">night</span>
            </span>
          </div>
          <div className="card-right">
            <div className="rating">
              <MdOutlineStar />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
