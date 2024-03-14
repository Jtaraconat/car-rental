import React from "react";
import OrderInfos from "../Components/OrderInfos";
import { useLocation } from "react-router-dom";

export default function RentalInfos() {
  const location = useLocation();
  console.log(location.state.allRentalInfos);

  return <OrderInfos />;
}
