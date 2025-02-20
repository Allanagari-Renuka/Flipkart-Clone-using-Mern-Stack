import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="border-b py-4 flex justify-between items-center">
            <img className="w-20 h-20 object-cover rounded-lg" src={item.image} alt={item.tshirtName} />
            <div className="flex-grow ml-4">
              <h3 className="text-lg font-semibold">{item.tshirtName}</h3>
              <p className="text-gray-700">{item.tshirtOrg}</p>
              <div className="flex gap-4">
                <span className="text-xl font-semibold text-black">₹{item.sp}</span>
                <span className="line-through text-gray-500">₹{item.cp}</span>
                <span className="text-green-500 font-medium">{item.dis}% off</span>
              </div>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => removeFromCart(item.tshirtName)}
            >
              Remove
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full"
          onClick={() => navigate('/buynow')}
        >
          Buy Now
        </button>
      )}
    </div>
  );
};

export default Cart;
