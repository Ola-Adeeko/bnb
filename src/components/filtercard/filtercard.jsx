import React from "react";
import "./filtercard.scss";

const FilterCard = ({ icon, title }) => {
  return (
    <div className="filter-card">
      <span className="filter-icon">{icon}</span>
      <span className="filter-title">{title}</span>
    </div>
  );
};

export default FilterCard;
