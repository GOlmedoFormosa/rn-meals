import React from "react";

import { CompactRestaurantInfo } from "../../shared/components/CompactRestaurantInfo";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};
