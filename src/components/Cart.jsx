import "../css/index.css";
import { useCart } from "../context/CartContext";
import CardCart from "./CardCart";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../utils/apiConfig";

const Cart = () => {
  const { isCartOpen, toggleCart } = useCart();

  const HandleClose = () => {
    "-h-full";
    toggleCart();
  };

  const [cartData, setCartData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const userID = 1; // Misalnya userID Anda adalah 1

  useEffect(() => {
    const getCartData = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(`${apiUrl}/cart/view/${userID}`);

        if (response.data.status === "success") {
          setCartData(response.data.data);
          console.log(response.data.data, `ini sulton`);
          setHasFetched(true); // Setel hasFetched ke true setelah berhasil fetch
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      } finally {
        setIsFetching(false);
      }
    };

    if (!hasFetched) {
      getCartData();
    }
  }, [hasFetched]); // Tambahkan hasFetched ke dalam array dependencies

  return (
    <div
      className={`w-1/3 h-screen bg-white fixed duration-500 ease-in-out z-10 ${
        isCartOpen ? "-right-0" : "-right-full"
      }`}
    >
      <div className="bg-black text-white flex justify-between px-4">
        <p>3 Items</p>
        <p>Cart Saya</p>
        <button onClick={HandleClose}>
          <span>close</span>
        </button>
      </div>
      <div className="px-4">
        {cartData && cartData.length > 0 ? (
          cartData.map((item) => (
            <CardCart
              key={item.cart_id}
              productName={item.product_name}
              productPrice={item.price}
              productFile={item.product_file}
              cart_id={item.cart_id}
            />
          ))
        ) : (
          <p>Keranjang Anda kosong.</p>
        )}
      </div>
    </div>
  );
};
export default Cart;
