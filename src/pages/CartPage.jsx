import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import Cart from "../components/Cart";

const CartPage = () =>{
    return(
        <>
            <Navbar />
            <div className="CartPage">
                <Cart/>
            </div>
            <Footer />
        </>
    );
};

export default CartPage;