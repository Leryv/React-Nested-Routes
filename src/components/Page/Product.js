import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="products">
      <div className="productsNav">
        <Link to="/products/list"> List </Link>
        <Link to="/products/add"> Add </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
