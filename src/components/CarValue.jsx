// import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredCars } from "../store";
const CarValue = () => {
  const cars = useSelector(selectFilteredCars);
  const totalCost = cars.reduce((acc, car) => {
    return acc + car.cost;
  }, 0);
  return <div className="car-value">${totalCost}</div>;
};

export default CarValue;
