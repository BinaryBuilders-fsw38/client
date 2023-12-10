import CardWishlist from "../components/CardWishlist";
import Navbar from "../components/Nav";
import "../css/index.css";

const Wishlist = (Props) => {
  return (
    <div>
      <Navbar />
      <div className="mt-10 max-w-7xl py-3 rounded-md border border-slate-300 max-h-full mx-auto">
        <h1 className="mx-4 text-4xl">Wishlist</h1>
        <div className="my-5 flex justify-between mx-12 flex-wrap">
          <CardWishlist />
          <CardWishlist />
          <CardWishlist />
          <CardWishlist />
          <CardWishlist />
          <CardWishlist />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
