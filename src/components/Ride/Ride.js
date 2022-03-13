import React from "react";
import "./Ride.css";

function Ride({ ride }) {
  return (
    <div className="ride">
      <div className="ride__main">
        <div className="ride__img">
          <img src={ride.map_url} alt="" />
        </div>
        <div className="ride__content">
          <p className="ride__content-container">
            Ride Id : <span className="ride__content-body">{ride.id}</span>
          </p>
          <p className="ride__content-container">
            Origin Station :
            <span className="ride__content-body">
              {" "}
              {ride.origin_station_code}
            </span>
          </p>
          <p className="ride__content-container">
            station_path :
            <span className="ride__content-body">
              {` [${ride.station_path.toString()}]`}
            </span>
          </p>
          <p className="ride__content-container">
            Date :<span className="ride__content-body"> {ride.date}</span>
          </p>
          <p className="ride__content-container">
            Distance :
            <span className="ride__content-body"> {ride.distance}</span>
          </p>
        </div>
      </div>
      <div className="ride__location">
        <div className="ride__location-content">
          <p>{ride.city}</p>
        </div>
        <div className="ride__location-content">
          <p>{ride.state}</p>
        </div>
      </div>
    </div>
  );
}

export default Ride;
