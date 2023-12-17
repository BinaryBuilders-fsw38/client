import "../css/index.css";
import { useCart } from '../context/CartContext';
import CardCart from "./CardCart";

const Cart = () => {
  const { isCartOpen, toggleCart } = useCart()

  const HandleClose = () => {
    '-h-full'
    toggleCart()
  }
  return (
    <div className={`w-1/3 h-screen bg-white fixed duration-500 ease-in-out z-10 ${isCartOpen ? '-right-0' : '-right-full'}`}>
      <div className="bg-black text-white flex justify-between px-4">
        <p>3 Items</p>
        <p>Cart Saya</p>
        <button onClick={HandleClose}>
          <span>close</span>
        </button>
      </div>
      <CardCart />
      <CardCart />
      <CardCart />
      <CardCart />
    </div>
  );
};
export default Cart;
