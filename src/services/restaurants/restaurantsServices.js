import camelize from "camelize";
import { mocks } from "./mock";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    const formated = restaurantsFormat(mock);
    resolve(formated);
  });
};

function restaurantsFormat({ results = [] }) {
  const mappedResult = results.map((restaurant) => ({
    ...restaurant,
    isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
  }));
  return camelize(mappedResult);
}
