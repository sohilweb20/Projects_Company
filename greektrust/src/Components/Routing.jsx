import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      {/* <Route /> */}
    </Routes>
  );
};

export default Routing;
