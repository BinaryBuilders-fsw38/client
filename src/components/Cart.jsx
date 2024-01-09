import "../css/index.css";
import { useCart } from "../context/CartContext";
import CardCart from "./CardCart";
import { useEffect, useState } from "react";
import axios from "axios";

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
    console.log("useEffect dijalankan dengan nilai hasFetched:", hasFetched);

    const getCartData = async () => {
      console.log("getCartData dipanggil");
      setIsFetching(true);
      try {
        const response = await axios.get(
          `http://localhost:3000/cart/view/${userID}`
        );

        if (response.data.status === "success") {
          console.log("Data berhasil diambil:", response.data.data);
          setCartData(response.data.data);
          setHasFetched(true); // Setel hasFetched ke true setelah berhasil fetch
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      } finally {
        setIsFetching(false);
      }
    };

    if (!hasFetched) {
      console.log("Memanggil getCartData karena hasFetched adalah false");
      getCartData();
    } else {
      console.log("Tidak memanggil getCartData karena hasFetched adalah true");
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
