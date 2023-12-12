import CardProduct from "../components/CardProduct";
import Footer from "../components/footer";
import Navbar from "../components/Nav";
import MiniNavbar from "../components/miniNavbar";
import Cart from "../components/Cart";

const Product = () => {
  return (
    <>
      <Navbar />
      <MiniNavbar />
      <div className="mt-2">
        <Cart />
      </div>
      <div className="flex justify-center max-w-7xl mx-auto flex-wrap mb-11">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <div className="flex flex-col items-center mb-11">
        <p className="mb-4">Menampilkan 10 dari 33 Produk</p>
        <button className="border border-gray-500 py-2 px-4 w-full">
          <b>TAMPILKAN LEBIH BANYAK 10+</b>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Product;
