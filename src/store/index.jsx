import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import { selectFilteredCars } from "./selectors";
export const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});
export {
  addCar,
  removeCar,
  changeCost,
  changeName,
  changeSearchTerm,
  selectFilteredCars,
};
