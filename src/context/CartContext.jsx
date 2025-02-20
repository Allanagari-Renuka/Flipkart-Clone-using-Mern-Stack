import { createContext, useContext, useState } from "react";
export const CartContext = createContext(); 

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.tshirtName === product.tshirtName);
      if (!exists) {
        return [...prevCart, product];
      }
      return prevCart;
    });
  };

  // Remove from cart
  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.tshirtName !== productName));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

