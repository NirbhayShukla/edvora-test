import React, { useState } from "react";
import menu from "../../assets/menu.svg";
import "./Filters.css";
import dropdown from "../../assets/dropdown.svg";

function Filters({
  changeFilter,
  activeFilter,
  upcomingRidesLength,
  pastRidesLength,
}) {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const ridesFilter = ["Nearest Rides", "Upcoming Rides", "Past Rides"];

  return (
    <div className="filters section__padding">
      <div className="filters__rides">
        {ridesFilter.map((filter, index) => (
          <div
            className={`filters__rides-container   ${
              parseInt(activeFilter) === index ? "active-filter" : ""
            }`}
            key={index}
            onClick={() => changeFilter(index)}
          >
            <p className="filters__rides-item">
              {`${filter} 
              ${
                1 === index
                  ? `(${upcomingRidesLength})`
                  : 2 === index
                  ? `(${pastRidesLength})`
                  : ""
              }`}
            </p>
            <div className="flters__rides-underline" />
          </div>
        ))}
      </div>
      <div
        className="filters__filter"
        onClick={() => setIsFilterMenuOpen((prevState) => !prevState)}
      >
        <img src={menu} alt="" className="filters__filter-img" />
        <p className="filters__filter-p">Filter</p>
        {isFilterMenuOpen && (
          <div className="filter-menu">
            <p>Filters</p>

            <hr />
            <div className="filter-menuitem">
              <p>State</p>
              <img src={dropdown} alt="" />
            </div>
            <div className="filter-menuitem">
              <p>City</p>
              <img src={dropdown} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Filters;
