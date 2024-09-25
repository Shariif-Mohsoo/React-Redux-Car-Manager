// import React from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredCars } from "../store";
import { removeCar } from "../store";
const CarList = () => {
  const dispatch = useDispatch();

  // const cars = useSelector(({ cars: { data, searchTerm } }) => {
  //   //"Mohsoo".includes("") === true;
  //   return data.filter((car) =>
  //     car.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // });

  const cars = useSelector(selectFilteredCars);
  const name = useSelector(({ form }) => {
    return form.name;
  });
  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };
  const renderedCars = useMemo(() => {
    return cars.map((car) => {
      //DECIDE IF THIS CAR SHOULD BE BOLD.
      //state.form.name
      const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
      return (
        <div className={`panel ${bold && "bold"}`} key={car.id}>
          <p>
            {car.name} - ${car.cost}
          </p>
          <button
            onClick={() => handleCarDelete(car)}
            className="button is-danger"
          >
            Delete
          </button>
        </div>
      );
    });
  }, [cars, name]);

  return (
    <div className="car-list">
      {renderedCars} <hr />{" "}
    </div>
  );
};

export default CarList;
