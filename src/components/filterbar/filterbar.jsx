import React from "react";
import "./filterbar.scss";
import { Tabs, Tab } from "@material-ui/core";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { filterData } from "../data";
import { useState } from "react";
import { filterSearch } from "../../redux/filterSlice";
import { useDispatch } from "react-redux";

const FilterBar = () => {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setActive(newValue);
  };

  const data = filterData;
  return (
    <div className="filter-bar">
      <div className="filter-box">
        <div className="filter-scroll">
          <Tabs
            value={active}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
          >
            {data.map((item) => (
              <Tab
                key={item.id}
                icon={item.icon}
                label={item.title}
                onClick={() => dispatch(filterSearch(item.type))}
              />
            ))}
          </Tabs>
        </div>
        <button className="filter-btn">
          <span className="filter-btn-icon">
            <TbAdjustmentsHorizontal />
          </span>
          <span className="filter-btn-text">Filters</span>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
