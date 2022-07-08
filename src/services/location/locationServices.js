import camelize from "camelize";

import { locations } from "./locationMock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationResult = locations[searchTerm];
    if (!locationResult) {
      reject("location not found");
    }
    resolve(locationResult);
  });
};

export const locationFormat = ({ results }) => {
  const formattedResponse = camelize(results);
  const { geometry = {} } = formattedResponse[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
