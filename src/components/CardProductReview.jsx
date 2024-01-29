import { RxDotFilled } from "react-icons/rx";
import ProductRate from "./ProductReviewRate";
import CardUserReview from "./UserReviewCard";
import InputReview from "./InpurReviewComponent";
import { FaStar } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import apiUrl from "../utils/apiConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardProduct = function () {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  console.log(productId);
  const userInfo = localStorage.getItem("userInfo");
  const userInfoObject = JSON.parse(userInfo);
  const userID = userInfoObject?.user_id || null;

  const [dataProduct, setDataProduct] = useState([]);
  const [dataProductReview, setDataProductReview] = useState([]);
  const [dataAverage, setDataAverage] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlistId, setWishlistId] = useState(""); // State untuk menyimpan ID wishlist

  useEffect(() => {
    const fetchData = async () => {
      const url1 = `${apiUrl}/product/get-product/${productId}`;
      const url2 = `${apiUrl}/review/get/${productId}`;
      const url3 = `${apiUrl}/review/getAverage/${productId}`;
      const url4 = `${apiUrl}/wishlist/get/${userID}`;
      try {
        const getDataProduct = await axios.get(url1);
        const result = getDataProduct.data.data;
        setDataProduct(result);

        const getDataProductReview = await axios.get(url2);
        const result2 = getDataProductReview.data.data;
        setDataProductReview(result2);

        const getAverage = await axios.get(url3);
        const result3 = getAverage.data.data;
        setDataAverage(result3);

        const getDataWishlist = await axios.get(url4);
        const result4 = getDataWishlist.data.data;
        setIsInWishlist(
          result4.some((item) => item.product_id === parseInt(productId))
        );
        // Mengatur wishlistId jika produk ada dalam wishlist
        const item = result4.find(
          (item) => item.product_id === parseInt(productId)
        );
        console.log(item, `====> log item`);
        if (item) {
          setWishlistId(item.wishlist_id);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [productId, userID, wishlistId]);

  let rating = parseFloat(dataAverage);
  if (isNaN(rating)) {
    rating = 0;
  } else {
    rating = Math.round(rating * 10) / 10;
  }
  const totalReviews = dataProductReview.length;

  //menghitung nilai rata2 dari setiap score 1-5
  function jumlah_review_dengan_skor(skor) {
    let jumlah = 0;
    for (let i = 0; i < totalReviews; i++) {
      if (dataProductReview[i].score === skor) {
        jumlah++;
      }
    }
    return jumlah;
  }
  let percentage = [];
  if (!totalReviews) {
    percentage.push(0, 0, 0, 0, 0);
  } else {
    for (let i = 1; i <= 5; i++) {
      const jumlah_review_skor_i = jumlah_review_dengan_skor(i);
      const presentase_skor_i = (jumlah_review_skor_i / totalReviews) * 100;
      percentage.push(Number(presentase_skor_i.toFixed(2)));
    }
  }
  const [activeTab, setActiveTab] = useState("detail");

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  const addToCart = async () => {
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

  const addToWishlist = async () => {
    try {
      const response = await axios.post(`${apiUrl}/wishlist/add/${userID}`, {
        product_id: productId,
      });

      if (response.status === 201) {
        setIsInWishlist(true);
        toast.success("Berhasil menambahkan ke Wishlist");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlist = async () => {
    console.log(wishlistId, `====> wishlistID`);
    try {
      const response = await axios.delete(
        `${apiUrl}/wishlist/delete/${wishlistId}`
      );
      if (response.status === 200) {
        setIsInWishlist(false);
        toast.success("Berhasil menghapus dari Wishlist");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="mt-16 ">
        <h1 className="pt-10 pl-20 text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">
          PRODUCT REVIEW
        </h1>

        <div className="flex flex-col lg:flex-row gap-5 mt-20 mx-20">
          <div className="lg:w-90 w-full">
            <img
              className="mx-2 my-2 rounded-sm md:w-2/3 sm:w-1/2 md:mx-auto sm:mx-auto w-1/2 mx-auto"
              src={dataProduct?.[0]?.product_file}
              alt="product"
            />
          </div>
          <div className="w-full ml-5">
            <h1 className="text-xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-3xl font-bold mb-2">
              {dataProduct?.[0]?.product_name}
            </h1>
            <div className="flex  gap-3 items-center">
              <h4 className="font-bold">
                Terjual <span className="text-gray-600">100+</span>
              </h4>
              <RxDotFilled className="mt-2" />
              <FaStar className="text-yellow-400" />
              <h2 className="font-bold">
                {rating}{" "}
                <span className="text-gray-600">({totalReviews} rating)</span>
              </h2>
            </div>
            <div className="mt-4">
              <h1 className="text-xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-3xl font-bold mb-2">
                IDR {dataProduct?.[0]?.price.toLocaleString("id-ID")}
              </h1>
              <h2 className="bg-red-200 w-8 text-sm font-black text-red-600 rounded-sm px-1 flex gap-2">
                20% <span className="text-gray-600 line-through">Rp35.000</span>
              </h2>
              <div className="flex md:gap-2 xl:gap-20 mt-10  border-y border-gray-300">
                <button
                  className={`text-xl font-semibold px-2 py-2 ml-10 ${
                    activeTab === "detail" ? "bg-black text-white" : ""
                  }`}
                  onClick={() => openTab("detail")}
                >
                  <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl">
                    Detail
                  </p>
                </button>
                <button
                  className={`text-xl font-semibold px-2 py-2 ml-10 ${
                    activeTab === "spesifikasi" ? "bg-black text-white" : ""
                  }`}
                  onClick={() => openTab("spesifikasi")}
                >
                  <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl">
                    Spesifikasi
                  </p>
                </button>
                <button
                  className={`text-xl font-semibold px-2 py-2 ml-10 ${
                    activeTab === "info_penting" ? "bg-black text-white" : ""
                  }`}
                  onClick={() => openTab("info_penting")}
                >
                  <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl">
                    Info Penting
                  </p>
                </button>
              </div>
              {activeTab === "detail" && (
                <div id="detail" className="tab-content">
                  <div className=" mb-5 mt-5 text-sm">
                    <h2 className="font-semibold text-gray-400">
                      kondisi: <span className="text-black">Baru</span>
                    </h2>
                    <h2 className="font-semibold text-gray-400 mt-2">
                      Min. Pemesanan <span className="text-black"> 1 Buah</span>
                    </h2>
                    <p
                      className="font-semibold text-sm mt-5 mb-2 sm:text-sm md:text-md lg:text-md xl:text-lg"
                      style={{ textAlign: "justify" }}
                    >
                      {dataProduct?.[0]?.description}
                    </p>
                  </div>
                </div>
              )}
              {activeTab === "spesifikasi" && (
                <div id="spesifikasi" className="tab-content">
                  <div className=" mb-5 mt-5 text-sm">
                    <h2 className="font-semibold text-gray-400">
                      kondisi: <span className="text-black">Baru</span>
                    </h2>
                    <h2 className="font-semibold text-gray-400 mt-2">
                      Min. Pemesanan <span className="text-black"> 1 Buah</span>
                    </h2>
                    <p
                      className="font-semibold text-sm mt-5 mb-2  sm:text-sm md:text-md lg:text-md xl:text-lg"
                      style={{ textAlign: "justify" }}
                    >
                      Ini spesifikasi. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptas veritatis possimus,
                      voluptatibus impedit at consequatur incidunt minus
                      consectetur, ab autem iure error saepe natus soluta vero
                      esse repellendus explicabo alias quis. Vel natus eos
                      doloribus aspernatur excepturi voluptatum, ipsum neque
                      sapiente asperiores praesentium dicta velit laboriosam
                      esse nisi sint ea id illum quod recusandae! Aliquid quod
                      sed excepturi ducimus adipisci. Est, deleniti totam
                      aspernatur suscipit mollitia placeat facere magni ullam.
                      Quod similique ut provident iusto necessitatibus veritatis
                      nesciunt.
                    </p>
                  </div>
                </div>
              )}
              {activeTab === "info_penting" && (
                <div id="info_penting" className="tab-content">
                  <div className=" mb-5 mt-5 text-sm">
                    <h2 className="font-semibold text-gray-400">
                      kondisi: <span className="text-black">Baru</span>
                    </h2>
                    <h2 className="font-semibold text-gray-400 mt-2">
                      Min. Pemesanan <span className="text-black"> 1 Buah</span>
                    </h2>
                    <p
                      className="font-semibold text-sm mt-5 mb-2 sm:text-sm md:text-md lg:text-md xl:text-lg"
                      style={{ textAlign: "justify" }}
                    >
                      Ini info penting. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptas veritatis possimus,
                      voluptatibus impedit at consequatur incidunt minus
                      consectetur, ab autem iure error saepe natus soluta vero
                      esse repellendus explicabo alias quis. Vel natus eos
                      doloribus aspernatur excepturi voluptatum, ipsum neque
                      sapiente asperiores praesentium dicta velit laboriosam
                      esse nisi sint ea id illum quod recusandae! Aliquid quod
                      sed excepturi ducimus adipisci. Est, deleniti totam
                      aspernatur suscipit mollitia placeat facere magni ullam.
                      Quod similique ut provident iusto necessitatibus veritatis
                      nesciunt.
                    </p>
                  </div>
                </div>
              )}
              <div className="mt-5">
                <button
                  type="button"
                  onClick={addToCart}
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  <span>
                    <i className="fa-solid fa-cart-plus"></i> Tambahkan ke Cart
                  </span>
                </button>
                <button
                  type="button"
                  onClick={isInWishlist ? removeFromWishlist : addToWishlist}
                  className={`text-white ${
                    isInWishlist
                      ? "bg-red-500"
                      : "bg-gray-800 hover:bg-gray-900"
                  } focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}
                >
                  <span>
                    <i
                      className={`fa-solid ${
                        isInWishlist
                          ? "fa-heart-circle-minus"
                          : "fa-heart-circle-plus"
                      }`}
                    ></i>{" "}
                    {isInWishlist
                      ? "Hapus dari Wishlist"
                      : "Tambahkan ke Wishlist"}
                  </span>
                </button>

                {/* <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  <span>
                    <i className="fa-solid fa-heart"></i> Tambahkan ke Wishlist
                  </span>? "fa-heart-circle-minus"
                          : "fa-heart-circle-plus"
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex ml-20">
          <ProductRate
            rating={rating}
            percentage={percentage}
            totalReviews={totalReviews}
          />
          <CardUserReview dataReview={dataProductReview} />
        </div>
        <div className=" flex justify-center item-center ml-20">
          <InputReview dataReview={setDataProductReview} />
        </div>
      </div>
    </>
  );
};

export default CardProduct;
