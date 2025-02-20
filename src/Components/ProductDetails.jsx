import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productTypes } from "../data/branddata.js";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { title, childtitle, productId } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = productTypes[title]?.[childtitle]?.[Number(productId)];

  if (!product) {
    return <h2 className="text-center text-red-500">Product not found</h2>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img className="w-full h-80 object-cover rounded-lg" src={product.image} alt={product.tshirtName} />
      <h2 className="text-2xl font-bold mt-4">{product.tshirtName}</h2>
      <p className="text-gray-700 mt-2">{product.tshirtOrg}</p>
      <div className="flex gap-4 mt-3">
        <span className="text-xl font-semibold text-black">₹{product.sp}</span>
        <span className="line-through text-gray-500">₹{product.cp}</span>
        <span className="text-green-500 font-medium">{product.dis}% off</span>
      </div>
      <div className="mt-4 flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
          onClick={() => navigate('/BuyNow')}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
