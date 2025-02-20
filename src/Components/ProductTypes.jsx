import React from "react";
import { useParams } from "react-router-dom";
import { productTypes } from "../data/branddata.js";
import ProductTypeChild from "../ChildComponents/ProductTypeChild.jsx";

function ProductTypes() {
  const { title, childtitle } = useParams();

  return (
    <div className="grid grid-cols-3 gap-20 p-15">
      {productTypes[title] && productTypes[title][childtitle] &&
        productTypes[title][childtitle].map((item, index) => (
          <ProductTypeChild key={index} details={item} index={index} />
        ))}
    </div>
  );
}

export default ProductTypes;
