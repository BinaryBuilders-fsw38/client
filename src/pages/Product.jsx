import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import MiniNavbar from "../components/MiniNavbar";

const Product = () => {
  return (
    <>
      <Navbar />
      <MiniNavbar />
      <div className="flex justify-center  mx-auto flex-wrap mb-11">
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
