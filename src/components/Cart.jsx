import "../css/index.css";
import { useCart } from "../context/CartContext";
import CardCart from "./CardCart";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../utils/apiConfig";
import { useAuth } from "../utils/useAuth";

const Cart = () => {
  const { isCartOpen, toggleCart } = useCart();
  const { isLogin } = useAuth();

  const HandleClose = () => {
    "-h-full";
    toggleCart();
  };

  const [cartData, setCartData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const getCartData = async () => {
      if (isLogin) {
        setIsFetching(true);
        try {
          const userInfo = localStorage.getItem("userInfo");
          const userInfoObject = JSON.parse(userInfo);
          const userID = userInfoObject?.user_id || null;
          if (userID !== null) {
            const response = await axios.get(`${apiUrl}/cart/view/${userID}`);

            if (response.data.status === "success") {
              setCartData(response.data.data);
              console.log(response.data.data, `ini sulton`);
              setHasFetched(true); // Setel hasFetched ke true setelah berhasil fetch
            }
          } else {
            // Handle the case where userId is null (user_id not found in userInfoObject)
            console.error("User ID not found in userInfoObject");
          }
        } catch (error) {
          console.error("Error fetching cart data:", error);
        } finally {
          setIsFetching(false);
        }
      }
    };

    if (!hasFetched && isLogin) {
      getCartData();
    }
  }, [isLogin, hasFetched]); // Tambahkan hasFetched ke dalam array dependencies

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
