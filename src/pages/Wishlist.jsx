import CardWishlist from "../components/CardWishlist";
import Navbar from "../components/Nav";
import Cart from "../components/Cart";
import "../css/index.css";

const Wishlist = (Props) => {
  return (
    <>
      <Navbar />
      <div className="-mt-4 absolute">
        <Cart />
      </div>
      <div className="mt-20 max-w-7xl py-3 rounded-md border border-slate-300 max-h-full mx-auto">
        <h1 className="mx-4 mt-10 text-4xl">Wishlist</h1>
        <div className="my-5 flex justify-between mx-12 flex-wrap md:flex-row sm:flex-col">
          <CardWishlist />
          <CardWishlist />
          <CardWishlist />
          <CardWishlist />
          <CardWishlist />
          <CardWishlist />
        </div>
        <div className="mx-14">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <span>
              <i class="fa-solid fa-share-nodes"></i> Share Wishlist Ini
            </span>
          </button>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <span>
              <i class="fa-solid fa-cart-plus"></i> Tambahkan Semua Item ke Cart
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
