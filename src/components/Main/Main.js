import React, { useState } from "react";
import { Filters, RideCards } from "../../components";
import "./Main.css";

function Main({ allRides, station_code }) {
  // To store selected ride list
  const [activeFilter, setActiveFilter] = useState(0);

  // To calculate distace between user and ride
  const distanceRides = allRides.map((ride) => {
    let distance = 100;
    ride.station_path.forEach((item) => {
      if (Math.abs(item - parseInt(station_code) < distance))
        distance = Math.abs(item - parseInt(station_code));
    });
    return { ...ride, distance };
  });

  // To sort rides according to distance
  distanceRides.sort((a, b) => {
    return a.distance - b.distance;
  });

  // To filter upcoming and past rides
  const currentDate = new Date();

  const upcomingRides = distanceRides.filter((ride) => {
    const rideDate = new Date(ride.date);
    if (currentDate < rideDate) return ride;
  });

  const pastRides = distanceRides.filter((ride) => {
    const rideDate = new Date(ride.date);
    if (currentDate > rideDate) return ride;
  });

  function changeFilter(index) {
    setActiveFilter(index);
  }

  return (
    <div className="main">
      <Filters
        changeFilter={changeFilter}
        activeFilter={activeFilter}
        upcomingRidesLength={upcomingRides.length}
        pastRidesLength={pastRides.length}
      />
      <RideCards
        allRides={distanceRides}
        activeFilter={activeFilter}
        upcomingRides={upcomingRides}
        pastRides={pastRides}
      />
    </div>
  );
}

export default Main;
