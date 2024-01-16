import { RxDotFilled } from "react-icons/rx";
import FotoProduct from "../images/haircare.jpg";
import ProductRate from "./ProductReviewRate";
import CardUserReview from "./UserReviewCard";
import InputReview from "./InpurReviewComponent"
import { FaStar } from "react-icons/fa6";
import React, { useState } from "react";
const CardProduct = function () {
  const rating = 4.5;
  const totalReviews = 200;
  const percentage = [10, 100, 45, 10, 25];

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
              src={FotoProduct}
              alt="product"
            />
          </div>
          <div className="w-full ml-5">
            <h1 className="text-xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-3xl font-bold mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate,
            </h1>
            <div className="flex  gap-3 items-center">
              <h4 className="font-bold">
                Terjual <span className="text-gray-600">100+</span>
              </h4>
              <RxDotFilled className="mt-2" />
              <FaStar className="text-yellow-400" />
              <h2 className="font-bold">
                4.7 <span className="text-gray-600">(91 rating)</span>
              </h2>
            </div>
            <div className="mt-4">
              <h1 className="text-xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-3xl font-bold mb-2">
                280.000
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
                      Ini Detail Produk Lorem ipsum dolor sit amet consectetur
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
          <CardUserReview />
        </div>
        <div className="w-full flex justify-center item-center">
        <InputReview/>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
