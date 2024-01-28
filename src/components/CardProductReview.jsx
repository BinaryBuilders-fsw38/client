import { RxDotFilled } from "react-icons/rx";
import ProductRate from "./ProductReviewRate";
import CardUserReview from "./UserReviewCard";
import InputReview from "./InpurReviewComponent";
import { FaStar } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import apiUrl from "../utils/apiConfig";

const CardProduct = function () {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const [dataProduct, setDataProduct] = useState([]);
  const [dataProductReview, setDataProductReview] = useState([]);
  const [dataAverage, setDataAverage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url1 = `${apiUrl}/product/get-product/${productId}`;
      const url2 = `${apiUrl}/review/get/${productId}`;
      const url3 = `${apiUrl}/review/getAverage/${productId}`;
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
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [productId]);

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

  return (
    <>
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
