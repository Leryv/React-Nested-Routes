import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductsData } from "../Data/ProductsData";

const AllProduct = () => {
  const navigate = useNavigate();
  return (
    <div className="listOfProducts">
      <div className="productsList">
        {ProductsData.map((product) => {
          return (
            <div
              className="productDisplay"
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              <h1>{product.nama_barang}</h1> <p>{product.deskripsi}</p>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProduct;
