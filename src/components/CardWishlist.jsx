import "../css/index.css";
import React from "react";


const CardWishlist = ({ wishlist_id, productName, productPrice, productFile }) => {
  const formatCurrency = (amount) => {
    // Menggunakan fungsi Intl.NumberFormat untuk mengubah format angka ke format mata uang
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };
  return (
    <>
    <div className="card-product rounded-md border border-slate-300 flex mb-3">
      <div className="flex align-middle justify-center flex-col w-28">
        <img
          src={productFile}
          alt={productName}
        />
      </div>
      <div className="flex align-middle justify-center flex-col w-48">
        <a className="my-2" href="/">
          {productName}
        </a>
        <p className="mb-2">{formatCurrency(productPrice)}</p>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          <span>
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </span>
        </button>
      </div>
      <div className="flex align-middle justify-center flex-col ">
        <button className="py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-slate-100">
          <span>
            <i className="fa-solid fa-trash-can"></i>
          </span>
        </button>
      </div>
    </div>
  </>
  );
};

export default CardWishlist;
