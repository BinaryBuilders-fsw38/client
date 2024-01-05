import React from "react";
import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";

const Review = ({ rating, percentage, totalReviews }) => {
  return (
    <div className="bg-white px-12 py-16 mt-5 ml-5 mb-5 border border-gray-300 shadow-lg rounded-lg md:mr-10 mr-10 xl:mr-auto">
      <h1 className="text-xl font-bold mb-4 text-center">ULASAN PEMBELI</h1>
      <div className="flex items-center mb-4">
        <div className="flex mr-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-2xl ${
                index < rating ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              &#9733;
            </span>
          ))}
        </div>
        <span className="text-gray-600">{`${rating.toFixed(
          1
        )} (${totalReviews} reviews)`}</span>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <span className="w-16 font-bold mr-2 flex gap-2 align-baseline">
            <FaStar className="text-yellow-400 pt-1" /> 5
          </span>
          <div className="relative w-full bg-gray-200 rounded-full">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${percentage[4]}%` }}
            ></div>
          </div>
          <span className="ml-2">{`${percentage[4]}%`}</span>
        </div>
        <div className="flex items-center">
          <span className="w-16 font-bold mr-2 flex gap-2">
            <FaStar className="text-yellow-400 pt-1" /> 4
          </span>
          <div className="relative w-full bg-gray-200 rounded-full">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${percentage[3]}%` }}
            ></div>
          </div>
          <span className="ml-2">{`${percentage[3]}%`}</span>
        </div>
        <div className="flex items-center">
          <span className="w-16 font-bold mr-2 flex gap-2">
            <FaStar className="text-yellow-400 pt-1" /> 3
          </span>
          <div className="relative w-full bg-gray-200 rounded-full">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${percentage[2]}%` }}
            ></div>
          </div>
          <span className="ml-2">{`${percentage[2]}%`}</span>
        </div>
        <div className="flex items-center">
          <span className="w-16 font-bold mr-2 flex gap-2">
            <FaStar className="text-yellow-400 pt-1" /> 2
          </span>
          <div className="relative w-full bg-gray-200 rounded-full">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${percentage[1]}%` }}
            ></div>
          </div>
          <span className="ml-2">{`${percentage[1]}%`}</span>
        </div>
        <div className="flex items-center">
          <span className="w-16 font-bold mr-2 flex gap-2">
            <FaStar className="text-yellow-400 pt-1" /> 1
          </span>
          <div className="relative w-full bg-gray-200 rounded-full">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${percentage[0]}%` }}
            ></div>
          </div>
          <span className="ml-2">{`${percentage[0]}%`}</span>
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  rating: PropTypes.number.isRequired,
  percentage: PropTypes.arrayOf(PropTypes.number).isRequired,
  totalReviews: PropTypes.number.isRequired,
};

export default Review;
