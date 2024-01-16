import React from "react";
import { FaStar } from "react-icons/fa6";

export default function FormReview () {
    return(
        <>
        <div className="w-1/2 ml-44">
            <label className="font-bold text-lg" htmlFor="review">Review Product</label>
                <textarea
                    id="about"
                    name="about"
                    rows={4}
                    className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                    defaultValue={''}
                    />
                <div className="flex flex-row-reverse w-full">
            <button
            type="submit"
            className="rounded-md my-4 mx-2 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Submit
            </button>
                </div>
        </div>
        </>
    )
}