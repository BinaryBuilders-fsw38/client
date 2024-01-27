import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // State untuk menyimpan data keranjang
  const [cart, setCart] = useState([]);

  // State untuk menandai apakah keranjang sedang dibuka atau ditutup
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
  }, []);

  // Fungsi untuk membersihkan keranjang
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartContext.Provider
      value={{ isCartOpen, toggleCart, cart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
