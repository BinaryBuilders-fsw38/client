import Navbar from '../components/Nav'
import Order from '../components/Order'
import Cart from "../components/Cart";
import { CartProvider } from '../context/CartContext';


const OrderPage = () => {
    return (
        <CartProvider>
        <Navbar/>
        <div className='mt-16'> 
            <Cart />
        </div>
        <Order/>
        </CartProvider>
    )
}

export default OrderPage