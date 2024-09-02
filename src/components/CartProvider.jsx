import { createContext, useState } from "react"

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (name, price, qt) => {
    setCart((prevCart) => {
        const existingItem = prevCart.find(item => item.name === name);
        if (existingItem) {
            return prevCart.map(item =>
            item.name === name
                ? { ...item, qt: item.qt + qt }
                : item
            );
        } else {

            return [...prevCart, { name, price, qt }];
        }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};