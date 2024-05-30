import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (items) => {
    // Перевіряємо, чи це масив
    if (Array.isArray(items)) {
      items.forEach(item => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
          setCartItems(cartItems.map(cartItem => 
            cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
          ));
        } else {
          setCartItems(prevItems => [...prevItems, { ...item, count: 1 }]);
        }
      });
    } else {
      // Якщо це не масив, обробляємо як один об'єкт
      const existingItem = cartItems.find(cartItem => cartItem.id === items.id);
      if (existingItem) {
        setCartItems(cartItems.map(cartItem => 
          cartItem.id === items.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
        ));
      } else {
        setCartItems([...cartItems, { ...items, count: 1 }]);
      }
    }
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
  };

  const updateItemCount = (item, newCount) => {
    setCartItems(cartItems.map(cartItem => 
      cartItem.id === item.id ? { ...cartItem, count: newCount } : cartItem
    ));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
