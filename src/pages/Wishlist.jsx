import CardWishlist from "../components/CardWishlist";
import "../css/index.css";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import apiUrl from "../utils/apiConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const userInfo = localStorage.getItem("userInfo");
  const userInfoObject = JSON.parse(userInfo);
  const userID = userInfoObject?.user_id || null;
  const [dataWishlist, setDataWishlist] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      try {
        const userInfo = localStorage.getItem("userInfo");
        const userInfoObject = JSON.parse(userInfo);
        const userId = userInfoObject?.user_id || null;

        if (userId !== null) {
          const response = await axios.get(`${apiUrl}/wishlist/get/${userId}`);
          const result = response.data.data;
          if (response.data.status === "success") {
            setDataWishlist(result);
            setHasFetched(true);
          }
        } else {
          // Handle the case where userId is null (user_id not found in userInfoObject)
          console.error("User ID not found in userInfoObject");
        }
      } catch (error) {
        console.error("Error fetching wishlist data", error);
      } finally {
        setIsFetching(false);
      }
    };

    if (!hasFetched) {
      fetchData();
    }
  }, [hasFetched]);

  const addToCart = async (productId) => {
    try {
      const response = await axios.post(`${apiUrl}/cart/add/${userID}`, {
        product_id: productId,
        quantity: 1,
      });

      if (response.status === 200) {
        toast.success(
          "Berhasil menambahkan ke Kerangjang, silahkan refresh page untuk melihat di cart"
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlist = async (wishlistId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/wishlist/delete/${wishlistId}`
      );
      if (response.status === 200) {
        toast.success("Berhasil menghapus dari Wishlist");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center">
        <div className="mt-10 max-w-7xl py-3 max-h-full mx-auto md:mx-5 lg:mx-5 xl:mx-5 mb-5">
          <h1 className="mx-4 text-4xl">WISHLIST</h1>
          <div className="my-20 flex justify-between mx-4 flex-wrap md:flex-row sm:flex-col">
            {dataWishlist && dataWishlist.length > 0 ? (
              dataWishlist.map((item) => (
                <CardWishlist
                  key={item.wishlist_id}
                  productName={item.product_name}
                  productPrice={item.price}
                  productFile={item.product_file}
                  removeFromWishlist={() =>
                    removeFromWishlist(item.wishlist_id)
                  }
                  addToCart={() => addToCart(item.product_id)}
                />
              ))
            ) : (
              <p>Wishlist Anda Kosong</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
