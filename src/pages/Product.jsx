import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import MiniNavbar from "../components/MiniNavbar";
import Cart from "../components/Cart";
import { CartProvider } from '../context/CartContext';


const Product = () => {
  return (
    <>
    <CartProvider>
      <Navbar />
      <MiniNavbar />
      <div className="absolute -mt-14">
        <Cart />
      </div>
      </CartProvider>
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
