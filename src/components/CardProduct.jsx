import React, { useState } from "react";
import axios from "axios";

const CardProduct = ({ products, visible }) => {
  const [cart, setCart] = useState([]);

  const handleClick = async (product) => {
    try {
      const userID = 1; //user yang sedang login (sementara)
      const response = await axios.post(
        `http://localhost:3000/cart/add/${userID}`,
        {
          product_id: product.product_id,
          quantity: 1,
        }
      );

      if (response.status === 200) {
        setCart([...cart, product]);
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {products?.slice(0, visible).map((el, id) => {
        return (
          <React.Fragment key={id}>
            <div className="mt-5 max-w-xs md:w-1/5 sm:w-1/5 lg:w-1/5 xl:w-1/4 xl:w-1/5 rounded  px-2 py-2 mb-4 mx-2 h-46 lg:h-78 xl:h-90">
              <a
                href="#"
                className=" hover:opacity-75 transition duration-300 w-32 md:w-25  lg:w-15 xl:w-20 h-32 lg:h-25 xl:h-48"
              >
                <img
                  className=" w-20 md:w-24 lg:w-36 xl:w-48 h-20 lg:h-36 xl:h-48"
                  src={el.product_file}
                  alt="Product"
                />
              </a>
              <div className="w-32 md:w-25  lg:w-13 xl:w-48 h-20">
                <a
                  className="MuiTypography-root text-xs sm:text-sm md:text-base lg:text-lg md:text-md w-13 lg:w-15 xl:w-48 h-32 lg:h-25 xl:h-48"
                  id="plugin-productTitle-typography"
                >
                  <div className="xl:h-10 lg:h-10 md:h-10 sm:h-10 mt-5">
                    {el.product_name.length > 12
                      ? el.product_name.slice(0, 15) + ". . ."
                      : el.product_name}
                  </div>
                </a>
                <div className="mt-2">
                  <p className="MuiTypography-root MuiTypography-alignLeft text-xs sm:text-sm md:text-base lg:text-lg w-22 md:w-30  lg:w-15 xl:w-48 h-32 lg:h-25 xl:h-48">
                    {" "}
                    IDR <b> {el.price.toLocaleString("id-ID")} </b>
                  </p>
                </div>
              </div>
              <button
                className="hover:bg-black hover:text-white mr-4"
                onClick={() => handleClick(el)}
              >
                <i className="fa fa-shopping-cart"></i> Cart
              </button>

              <button
                className="hover:bg-black hover:text-white"
                onClick={() =>
                  (window.location.href = `http://localhost:3006/product-review/${el.product_id}`)
                }
              >
                <i className="fa fa-info-circle"></i> Detail
              </button>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default CardProduct;
