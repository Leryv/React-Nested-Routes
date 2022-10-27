import React from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../Data/ProductsData";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <div className="listOfProducts">
      <div className="productDisplay">
        <h1>{ProductsData[id - 1].nama_barang}</h1>
        <h1>{ProductsData[id - 1].deskripsi}</h1>
      </div>
    </div>
  );
};
export default SingleProduct;
