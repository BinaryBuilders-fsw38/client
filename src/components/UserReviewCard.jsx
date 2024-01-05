import React from "react";
import { FaStar } from "react-icons/fa6";
import UserPict from "../images/men.png";
import FotoProduct from "../images/haircare.jpg";
import { FiMoreVertical } from "react-icons/fi";

const CardUserReview = function () {
  return (
    <>
      <div className="w-full mr-10 md:mr-10 xl:mr-auto xl:ml-4 md:ml-auto">
        <div className=" mx-10 my-5 border-gray-300 border-y ">
          <div className="flex flex-col gap-4 my-4">
            <div className="flex justify-between gap-1 pt-2 pl-1">
              <div className="flex gap-1 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="w-20 flex justify-end -mr-30 ">
                <a href="#">
                  <FiMoreVertical className="text-2xl mt-1 font-semibold" />
                </a>
              </div>
            </div>
            <div className="flex">
              <img
                className="w-10 ml-2 rounded-full"
                src={UserPict}
                alt="user-pict"
              />
              <h1 className="text-xl">Maulana</h1>
            </div>
          </div>
          <h2 className="text-sm ml-2 mb-2 font-semibold text-gray-400">
            Product: haircare
          </h2>
          <div className="mx-2 font-semibold text-sm">
            <p
              className="mb-2 text-sm sm:text-sm md:text-md lg:text-md xl:text-lg"
              style={{ textAlign: "justify" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              deleniti error totam laboriosam! Corrupti quidem tempora, illum at
              nam ex minima. Aperiam quibusdam, quos voluptates doloremque nihil
              at nostrum omnis totam, et incidunt, dolorum maxime? Ea beatae
              sunt repellendus? Illum.
            </p>
          </div>
          <div className="flex gap-3 my-5 mx-2">
            <img
              className="w-20 xl:w-36 lg:w-28 md:w-24 sm:w-20 xl:h-36 lg:h-28 md:h-24 sm:h-20 h-20 border-black border rounded-md"
              src={FotoProduct}
              alt="foto-product-review"
            />
            <img
              className="w-20 xl:w-36 lg:w-28 md:w-24 sm:w-20 xl:h-36 lg:h-28 md:h-24 sm:h-20 h-20 border-black border rounded-md"
              src={FotoProduct}
              alt="foto-product-review"
            />
            <img
              className="w-20 xl:w-36 lg:w-28 md:w-24 sm:w-20 xl:h-36 lg:h-28 md:h-24 sm:h-20 h-20 border-black border rounded-md"
              src={FotoProduct}
              alt="foto-product-review"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardUserReview;
