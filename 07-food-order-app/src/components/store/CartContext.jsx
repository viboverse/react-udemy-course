import { createContext, useState } from 'react';
export const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  totalPrice: null,
});

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  function addItem(newItem) {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  }

  function removeItem(newItemId) {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === newItemId ? { ...item, quantity: item.quantity - 1 } : item
      );

      return updatedItems.filter((item) => item.quantity > 0);
    });
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
