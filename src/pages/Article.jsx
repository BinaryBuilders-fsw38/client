import Navbar from "../components/Nav";
import Cart from "../components/Cart";
import { CartProvider } from '../context/CartContext';
import Faq from "../components/Faq"
import CardArticle from "../components/CardArticle";


const article = () => {
    return(
        <CartProvider>
      <Navbar />
      <div className="bg-slate-900 ">
        <Cart />
      </div>
        <Faq />
        <CardArticle />
        <CardArticle />
        <CardArticle />
      </CartProvider>
    )
}


export default article;