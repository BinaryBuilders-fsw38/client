import Navbar from "../components/Nav";
import Cart from "../components/Cart";
import { CartProvider } from '../context/CartContext';
import Faq from "../components/Faq"


const article = () => {
    return(
        <CartProvider>
      <Navbar />
      <div className="bg-slate-900 ">
        <Cart />
      </div>
        <Faq />
      </CartProvider>
    )
}


export default article;