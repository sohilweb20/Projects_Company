import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar_upper">
      <Link to="/">
        <div>TeeRex Store</div>
      </Link>

      <div className="Navbar_lower">
        <Link to="/">
          <div>Products</div>
        </Link>

        <Link to="/cart">
          <div>Cart</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
