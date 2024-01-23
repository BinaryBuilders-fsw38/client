import CardWishlist from "../components/CardWishlist";
import Navbar from "../components/Nav";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import "../css/index.css";
import { CartProvider } from "../context/CartContext";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import apiUrl from "../utils/apiConfig";

const Wishlist = (props) => {
  const [dataWishlist, setDataWishlist] = useState([1]);
  const [visible, setVisible] = useState(6);

  const getDataWishlist = useCallback(async () => {
    try {
      const url = dataWishlist
        ? `${apiUrl}/wishlist/get/${dataWishlist}`
        : `${apiUrl}/wishlist/get`;

      const dataWishlistFromServer = await axios({
        method: "GET",
        url: url,
      });
      console.log(dataWishlistFromServer.data.data, "ini DATA");
      const wishlist = dataWishlistFromServer.data.data;
      setDataWishlist(wishlist);
    } catch (error) {
      console.log("---------------> TIDAK BISA");
      console.log(error, "GAGAL");
    }
  }, []);
  useEffect(() => {
    getDataWishlist();
  }, []);

  useEffect(() => {}, [dataWishlist]);

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  return (
    <>
      <CartProvider>
        <Navbar />
        <div className="-mt-4 absolute">
          <Cart />
        </div>
      </CartProvider>
      <div className="mt-20 max-w-7xl py-3 rounded-md border border-slate-300 max-h-full mx-auto mb-5">
        <h1 className="mx-4 mt-10 text-4xl">PRODUCT REVIEW</h1>
        <div className="my-5 flex justify-between mx-12 flex-wrap md:flex-row sm:flex-col">
          <CardWishlist wishlist={dataWishlist.slice(0, visible)} />
        </div>
        <div className="mx-14">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <span>
              <i className="fa-solid fa-share-nodes"></i> Share Wishlist Ini
            </span>
          </button>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <span>
              <i className="fa-solid fa-cart-plus"></i> Tambahkan Semua Item ke
              Cart
            </span>
          </button>
          {visible < dataWishlist.length && (
            <button
              onClick={loadMore}
              className="border border-gray-500 py-2 px-4 w-full"
            >
              <b>TAMPILKAN SEMUA</b>
              <p className="mb-4">
                Menampilkan {visible} dari {dataWishlist.length} Produk
              </p>
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
