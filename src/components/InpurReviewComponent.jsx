import axios from "axios";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import apiUrl from "../utils/apiConfig";

export default function FormReview({ dataReview }) {
  const location = useLocation();
  const productID = location.pathname.split("/")[2];

  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    const userInfo = localStorage.getItem("userInfo");
    const userInfoObject = JSON.parse(userInfo);
    const userID = userInfoObject?.user_id || null;
    if (!userID) {
      return alert("Anda belum login!");
    } else {
      e.preventDefault();
      const inputData = {
        user_id: userID,
        score: rating,
        comment: text,
      };
      try {
        const response = await axios.post(
          `${apiUrl}/review/add/${productID}`,
          inputData
        );
        console.log(response.data);
        dataReview((prevData) => [...prevData, inputData]);

        setRating("");
        setText("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="w-1/2 ml-44">
        <label className="font-bold text-lg" htmlFor="review">
          Review Product
        </label>
        <div>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <div key={i} className="inline-block">
                <FaStar
                  className="star w-10 h-10"
                  color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                  onClick={() => setRating(ratingValue)}
                />
              </div>
            );
          })}
        </div>
        <textarea
          id="about"
          name="about"
          value={text}
          onChange={handleText}
          rows={4}
          className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
        />
        <div className="flex flex-row-reverse w-full">
          <button
            onClick={handleSubmit}
            className="rounded-md my-4 mx-2 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
