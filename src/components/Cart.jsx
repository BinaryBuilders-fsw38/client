import "../css/index.css";
import { useCart } from '../context/CartContext';
import CardCart from "./CardCart";
import { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const { isCartOpen, toggleCart } = useCart()

  const HandleClose = () => {
    '-h-full'
    toggleCart()
  }

  const [cartData, setCartData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getCartData = async () => {
      setIsFetching(true);
      try {
        const userID = 1
        const response = await axios.get(`http://localhost:3000/cart/view/${userID}`)
        if (response.data.status === "success") {
          setCartData(response.data.data)
          console.log(setCartData);
        }
      } catch (error) {
        console.error("Error fetching recommended products:", error);
      } finally {
        setIsFetching(false)
      }
    };

    getCartData();
  }) 
  

  return (
    <div className={`w-1/3 h-screen bg-white fixed duration-500 ease-in-out z-10 ${isCartOpen ? '-right-0' : '-right-full'}`}>
      <div className="bg-black text-white flex justify-between px-4">
        <p>3 Items</p>
        <p>Cart Saya</p>
        <button onClick={HandleClose}>
          <span>close</span>
        </button>
      </div>
      <CardCart />
      <CardCart />
      <CardCart />
      <CardCart />
    </div>
  );
};
export default Cart;
