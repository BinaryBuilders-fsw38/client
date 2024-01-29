import { createContext, useContext, useState, useCallback } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // State untuk menyimpan data keranjang
  const [cart, setCart] = useState([]);

  // State untuk menandai apakah keranjang sedang dibuka atau ditutup
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Fungsi untuk menambah barang ke keranjang
  const addToCart = async (productId, quantity, userID) => {
    try {
      const response = await axios.post(`/api/cart/add/${userID}`, {
        product_id: productId,
        quantity: quantity,
      });
      // Jika berhasil, perbarui state keranjang
      setCart([...cart, response.data.data]);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // Fungsi untuk menghapus barang dari keranjang berdasarkan ID
  const removeFromCart = async (cartId) => {
    try {
      await axios.delete(`/api/cart/del/${cartId}`);
      // Jika berhasil, perbarui state keranjang
      setCart(cart.filter((item) => item.cart_id !== cartId));
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  // Fungsi untuk mendapatkan data keranjang
  const getCartData = async (userId) => {
    try {
      const response = await axios.get(`/api/cart/view/${userId}`);
      // Jika berhasil, perbarui state keranjang
      setCart(response.data.data);
    } catch (error) {
      console.error("Error getting cart data:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        toggleCart,
        cart,
        addToCart,
        removeFromCart,
        getCartData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
