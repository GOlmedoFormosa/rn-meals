import camelize from "camelize";
import { mocks, mockImages } from "./mock";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsFormat = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => ({
    ...restaurant,
    isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    photos: restaurant.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    }),
  }));
  return camelize(mappedResult);
};
