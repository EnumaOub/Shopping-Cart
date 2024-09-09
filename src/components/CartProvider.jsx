import { createContext, useState, useEffect } from "react"

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const addToCart = (name, price, qt, imageUrl) => {
    setCart((prevCart) => [...prevCart, { name, price, qt, imageUrl }]);
  };

  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};