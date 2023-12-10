import Navbar from '../components/Nav'
import Order from '../components/Order'
import Cart from "../components/Cart";

const OrderPage = () => {
    return (
        <>
        <Navbar/>
        <div className='mt-16'> 
            <Cart />
        </div>
        <Order/>
        </>
    )
}

export default OrderPage