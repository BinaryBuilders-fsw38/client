import "../css/index.css";
import Bodycare from "../images/bodycare.jpg";
import SkinCare from "../images/skincare.jpg";
import HairCare from "../images/haircare.jpg";

const Cart = () =>{
     const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
     const ProductDivStyle = "flex w-[100%] h-auto items-center mobile:flex-col";
     const PriceQuantityStyle = "flex-auto flex flex-col items-center mobile:mt-7 mobile:mb-7";
    return(
    <div>
      <div className="p-3">
        <div className="flex justify-center text-5xl">Cart</div>

        {/* upper buttons div */}
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="border-2 border-black bg-white text-black font-bold py-2 px-4 rounded mb-2">
            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-5">
            <p>Items in your Cart: 3</p>
            <p className="ml-5">Whishlist Items: 0</p>
          </div>
          <button className="bg-black text-white font-bold py-2 px-4 rounded mb-2">Checkout Now</button>
        </div>

        {/* vertically center parent div */}
        <div className="flex flex-row mt-7 mobile:flex-col">
          {/* product div */}
          <div className="flex flex-col flex-1">
            {/* 1st product div */}
            <div className={ProductDivStyle}>
              <div className=" product flex pl-2 self-start">
                <img
                  className="product_img w-[8rem]"
                  src={Bodycare}
                  alt="Product"
                />

                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>123
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>HMNS
                  </p>
                  <p className="flex items-center justify-center">
                    <b className="mr-2">Type:</b>Bodycare
                  </p>
                  <p>
                  </p>
                  <p>
                  </p>
                </div>
              </div>

              {/*Price and Quantity Div*/}
              <div className={PriceQuantityStyle}>
                <div className="counter flex items-center text-2xl justify-start">
                    Quantity
                    <div className="ml-5 shadow-md flex">
                        <div className="bg-black text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer">
                            -
                        </div>
                        <div className="w-8 flex items-center justify-center border-[1px] border-black">
                            1
                        </div>
                        <div className="bg-black text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer">
                            +
                        </div>
                        <div>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                          <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/></svg>
                        </div>
                    </div>
                </div>
                <p className="flex items-center justify-center text-2xl mt-1">
                IDR <b> 320,000.00 </b>
                </p>
              </div>
            </div>

            <hr className="mb-7 mt-7 mobile:mt-0" />
            {/* 2nd product div */}
            <div className={ProductDivStyle}>
            <div className=" product flex pl-2 self-start">
                <img
                  className="product_img w-[8rem]"
                  src={SkinCare}
                  alt="Product"
                />

                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>456
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Haum
                  </p>
                  <p className="flex items-center justify-center">
                    <b className="mr-2">Type:</b>Skincare
                  </p>
                  <p>
                  </p>
                  <p>
                  </p>
                </div>
              </div>

              {/*Price and Quantity Div*/}
              <div className={PriceQuantityStyle}>
                <div className="counter flex items-center text-2xl justify-start">
                    Quantity
                    <div className="ml-5 shadow-md flex">
                        <div className="bg-black text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer">
                            -
                        </div>
                        <div className="w-8 flex items-center justify-center border-[1px] border-black">
                            1
                        </div>
                        <div className="bg-black text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer">
                            +
                        </div>
                        <div>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                          <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/></svg>
                        </div>
                    </div>
                </div>
                <p className="flex items-center justify-center text-2xl mt-1">
                IDR <b> 150,000.00 </b>
                </p>
              </div>
            </div>
            <hr className="mb-7 mt-7 mobile:mt-0" />

            {/* 3rd Product */}
            <div className={ProductDivStyle}>
            <div className=" product flex pl-2 self-start">
                <img
                  className="product_img w-[8rem]"
                  src={HairCare}
                  alt="Product"
                />

                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>789
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Kelaya
                  </p>
                  <p className="flex items-center justify-center">
                    <b className="mr-2">Type:</b>Haircare
                  </p>
                  <p>
                  </p>
                  <p>
                  </p>
                </div>
              </div>

              {/*Price and Quantity Div*/}
              <div className={PriceQuantityStyle}>

                <div className="counter flex items-center text-2xl justify-start">
                    Quantity
                    <div className="ml-5 shadow-md flex">
                        <div className="bg-black text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer">
                            -
                        </div>
                        <div className="w-8 flex items-center justify-center border-[1px] border-black">
                            1
                        </div>
                        <div className="bg-black text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer">
                            +
                        </div>
                        <div>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                          <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/></svg>
                        </div>
                    </div>
                </div>
                <p className="flex items-center justify-center text-2xl mt-1">
                IDR <b> 90,000.00 </b>
                </p>
            </div>
        </div>
            <hr className="mb-7 mt-7 mobile:mt-0" />
        
        </div>
          <div className="Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-black rounded-md shadow-lg p-5 text-lg mobile:mb-6">
            <h1 className="text-[2rem]">SUMMARY</h1>
            <div className={SummaryItemStyle}>
              <p>SubTotal:</p>
              <p>IDR <b> 560,000.00 </b></p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping:</p>
              <p>IDR <b> 10,000.00 </b></p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping Discount:</p>
              <p>-IDR <b> 10,000.00</b></p>
            </div>
            <div className={SummaryItemStyle + " text-3xl font-bold"}>
              <p>Total:</p>
              <p>IDR <b> 560,000.00 </b></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
};
export default Cart;
                 