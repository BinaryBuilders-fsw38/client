import "../css/index.css";
import React from "react";
const CardProduct = ({ products, visible }) => {
  return (
    <>
      {products?.slice(0, visible).map((el, id) => {
        return (
          <React.Fragment key={id}>
            <div className="max-w-xs md:w-1/5 sm:w-1/5 lg:w-1/5 xl:w-1/4 xl:w-1/5 rounded  px-2 py-2 mb-4 mx-2 h-46 lg:h-78 xl:h-90">
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
              <div className="w-32 md:w-25  lg:w-13 xl:w-48 h-40">
                <a
                  href="#"
                  className="MuiTypography-root text-xs sm:text-sm md:text-base lg:text-lg md:text-md w-13 lg:w-15 xl:w-48 h-32 lg:h-25 xl:h-48"
                  id="plugin-productTitle-typography"
                >
                  <div className="xl:h-20 lg:h-28 md:h-20 sm:h-12 mt-5">
                    {el.product_name}
                  </div>
                </a>
                <div className="mt-7">
                  <p className="MuiTypography-root MuiTypography-alignLeft text-xs sm:text-sm md:text-base lg:text-lg w-22 md:w-30  lg:w-15 xl:w-48 h-32 lg:h-25 xl:h-48">
                    {" "}
                    IDR <b> {el.price.toLocaleString("id-ID")} </b>
                  </p>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default CardProduct;
