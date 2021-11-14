import React from "react";
import ProductBox from "./ProductBox";
// import data from "./data";

const ProductDisplay = () => {
  return (
    <div>
      <h3 className="title-product py-md-2 mt-4">Product</h3>
      <div className="sub-product-comp mt-3">
        <ProductBox />
      </div>
    </div>
  );
};

export default ProductDisplay;
