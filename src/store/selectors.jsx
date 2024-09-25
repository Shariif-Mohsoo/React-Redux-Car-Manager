import { createSelector } from "reselect";
// createSelector is a function from the Reselect library that helps you
//  memoize your selectors. Memoization means that if the inputs (state values)
// haven’t changed, the selector will return the previously computed result.
// This prevents unnecessary recalculations and improves performance.
// Select the 'data' (cars) and 'searchTerm' from state.

//array of cars
const selectCarData = (state) => state.cars.data;
//users search term to filter through cars.
const selectSearchTerm = (state) => state.cars.searchTerm;
// The input selectors: [selectCarData, selectSearchTerm] –
// the filtered list of cars: the full list of cars (data) and the search term (searchTerm).
//  these are the two pieces of data we need to compute.

// Memoized selector that filters the cars based on the search term
export const selectFilteredCars = createSelector(
  [selectCarData, selectSearchTerm], // Input selectors
  // output function.
  (data, searchTerm) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);
// data:
// What It Is: An array of car objects.
// Where It Comes From: Retrieved from the Redux state using the selector selectCarData.
// searchTerm:
// What It Is: A string that contains the text you want to search for within car names.
// Where It Comes From: Retrieved from the Redux state using the selector selectSearchTerm.
