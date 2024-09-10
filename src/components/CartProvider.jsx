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
    setCart((prevCart) => {
        const existingItem = prevCart.find(item => item.name === name);
        if (existingItem) {
            return prevCart.map(item =>
            item.name === name
                ? { ...item, qt: item.qt + qt }
                : item
            );
        } else {

            return [...prevCart, { name, price, qt, imageUrl }];
        }
    });
  };

  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  const reduceFromCart = (productName) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.name === productName);
      if (existingItem.qt > 1) {
          return prevCart.map(item =>
          item.name === productName
              ? { ...item, qt: item.qt -1 }
              : item
          );
      } else {

          return prevCart.filter((item) => item.name !== productName);
      }
  });
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, reduceFromCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};