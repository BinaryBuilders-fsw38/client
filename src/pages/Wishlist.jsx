import CardWishlist from "../components/CardWishlist";
import "../css/index.css";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import apiUrl from "../utils/apiConfig";

const Wishlist = () => {
  const [dataWishlist, setDataWishlist] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const userInfo = localStorage.getItem("userInfo")
  const userInfoObject = JSON.parse(userInfo);
  const userId = userInfoObject.user_id 

  
  useEffect(() => {
    const getWishlistData = async() => {
      setIsFetching(true)
      try {
        const response = await axios.get(`${apiUrl}/wishlist/get/${userId}`)
        if (response.data.status === "success") {
          console.log(response.data.data);
          setDataWishlist(response.data.data)
          
          setHasFetched(true)
        }
      } catch {
        // console.error("error fetching wishlist data", error)
      } finally {
        setIsFetching(false);
      }
    }
    if(!hasFetched){
      getWishlistData()
      console.log(dataWishlist, "====================> data wishlist");
    } 
  },[hasFetched])
  return (
    <>
      <div className="mt-20 max-w-7xl py-3 rounded-md border border-slate-300 max-h-full mx-auto mb-5">
        <h1 className="mx-4 mt-10 text-4xl">PRODUCT REVIEW</h1>
        <div className="my-5 flex justify-between mx-12 flex-wrap md:flex-row sm:flex-col">
        {dataWishlist && dataWishlist.length > 0 ? (
          dataWishlist.map((item) => (
            <CardWishlist 
                key={item.wishlist_id}
                productName={item.product_name}
                productPrice={item.price}
                productFile={item.product_file}
              />
          ))
        ) : (<p>Wishlist Anda Kosong</p>)}
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
        </div>
      </div>
    </>
  );
};

export default Wishlist;
