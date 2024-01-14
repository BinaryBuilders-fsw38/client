import "../css/index.css";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const CardWishlist = ({wishlist, visible}) => {

  const [dataProduct, setDataProduct] = useState([3]);
  const getDataProduct = useCallback(async () => {
    try {
      const url = dataProduct
      ? `http://localhost:3000/product/get-product/${dataProduct}`
      : `http://localhost:3000/product/get-product`;
    const dataProductFromServer = await axios({
      method: "GET",
      url: url, 
    })
    console.log(dataProductFromServer.data.data, "DATA");
    const result = dataProductFromServer.data.data;
    setDataProduct(result);
  } catch (error) {
    console.log("------------> GAGAL");
  }
  }, []);
  useEffect(() => {
    getDataProduct();
  }, [])

  useEffect(() => {}, [dataProduct]);
  
  return (
    <>
    {dataProduct.slice().map((el, id) => {
      return (
        <React.Fragment key={id}> 
      <div className="card-product rounded-md border border-slate-300 flex mb-3">
        <div className="flex align-middle justify-center flex-col w-24 md:w-28">
          <img
            src={el.product_file}
            alt="product"
          />
        </div>
        <div className="flex align-middle justify-center flex-col w-48">
          <a className="my-2" href="#">
            {el.product_name}
          </a>
          <p className="mb-2">IDR {el.price}</p>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <span>
              <i className="fa-solid fa-cart-plus"></i> Add to Cart
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
      </React.Fragment>
      );
    })}
    </>
  );
};

export default CardWishlist;
