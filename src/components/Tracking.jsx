import Footer from "./Footer";
import Navbar from "../components/Nav";
import MiniNavbar from "./MiniNavbar";
import Tracklist from "../components/Tracklist";
import CardProduct from "../components/CardProduct";
import Cart from "../components/Cart";
import { CartProvider } from '../context/CartContext';

const Tracking = () => {
    return (
        <>
        <CartProvider>

        <Navbar />
        <MiniNavbar />
        <div className="mt-2">
          <Cart />
        </div>
        </CartProvider>
        <div className="flex">
        <Tracklist />
      <div className="w-1/4 p-4">
        <button className="w-full rounded bg-blue-800 text-white font-bold mb-2">Beri Ulasan</button>
        <button className="w-full rounded bg-blue-800 text-white font-bold mb-2">Chat Penjual</button>
        <button className="w-full rounded bg-blue-800 text-white font-bold mb-2">Bantuan</button>
      </div>
    </div>
    <div className="w-1/3 p-4 border flex space-x-80">
        <h1>No Invoice</h1>
        <p>INV-10000/20/21</p>
      </div>
    <div className="w-1/3 p-4 border flex space-x-72">
        <h1>Tgl Pembelian</h1>
        <p>29 - Sept - 2023</p>
      </div>
      <div className="w-1/3 p-4 border">
        <h1>Detail Produk</h1>
        <CardProduct />
      </div>
      <Footer />
        </>
    );
};

export default Tracking;