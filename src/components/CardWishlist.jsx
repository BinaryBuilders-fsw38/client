import "../css/index.css";

const CardWishlist = (props) => {
  return (
    <>
      <div className="card-product rounded-md border border-slate-300 flex mb-3">
        <div className="flex align-middle justify-center flex-col w-24 md:w-28">
          <img
            src="https://thumbor.sirclocdn.com/unsafe/500x500/filters:format(webp)/magento.bodypack.co.id/media/catalog/product/cache/9923e576b779a380a568c8c3f82e7a7d/9/2/920001810001_-_velixir_blk-1_1024_result.jpg"
            alt="product"
          />
        </div>
        <div className="flex align-middle justify-center flex-col w-48">
          <a className="my-2" href="/">
            Bodypack Velixir Backpack - Black
          </a>
          <p className="mb-2">IDR 499,000.00</p>
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
