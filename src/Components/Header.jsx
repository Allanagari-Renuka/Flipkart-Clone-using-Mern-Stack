import React from "react";
import { useNavigate } from "react-router-dom";
import flipkart from "../images/flipkart-logo.png";
import Person2Icon from "@mui/icons-material/Person2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/CartContext"; // Import useCart

function Header() {
  const navigate = useNavigate();
  const { cart } = useCart(); // Get cart from context

  return (
    <nav className="w-full h-auto flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Logo */}
      <img
        src={flipkart}
        className="w-28 cursor-pointer"
        alt="Flipkart Logo"
        onClick={() => navigate("/")}
      />

      {/* Search Bar */}
      <div className="relative flex-grow mx-4">
        <input
          type="search"
          className="w-full bg-white text-gray-700 text-sm border border-gray-300 rounded-md pr-3 pl-10 py-2 transition duration-300 focus:outline-none focus:border-gray-400 hover:border-gray-300 shadow-sm"
          placeholder="Search for Products, Brands and More"
        />
        <button
          className="absolute left-2 top-2 bg-gray-700 p-1.5 text-white rounded"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Login Button */}
      <button onClick={() => navigate("/login")} className="flex items-center gap-2">
        <Person2Icon />
        Login
      </button>

      {/* Cart Button with Cart Count */}
      <button
        onClick={() => navigate("/cart")}
        className="flex items-center gap-2 relative"
      >
        <ShoppingCartIcon />
        Cart
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 py-0 text-xs">
            {cart.length}
          </span>
        )}
      </button>
    </nav>
  );
}

export default Header;
