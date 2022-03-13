import React, { useEffect, useState } from "react";
import { Ride } from "../../components";
import "./RideCards.css";

function RideCards({ allRides, activeFilter, pastRides, upcomingRides }) {
  const currentRides =
    parseInt(activeFilter) === 0
      ? allRides
      : parseInt(activeFilter) === 1
      ? upcomingRides
      : pastRides;

  const rides = currentRides.map((ride, index) => (
    <Ride key={index} ride={ride} />
  ));

  return <div className="rideCards section__padding">{rides}</div>;
}

export default RideCards;
