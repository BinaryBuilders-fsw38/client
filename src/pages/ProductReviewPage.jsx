import Navbar from "../components/Nav";
import Cart from "../components/Cart";
import Card from "../components/CardProductReview"
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";


const ProductReview = () => {
    return (
        <>
        <CartProvider>
        <Navbar/>
        <Cart/>
        </CartProvider>
        <Card/>
        <Footer/>
        </>
    )
}

export default ProductReview