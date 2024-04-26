import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoutes() {
  const location = useLocation();
  let data = location.state !== null;

  return data ? <Outlet /> : <Navigate to={"/"} />;
}
