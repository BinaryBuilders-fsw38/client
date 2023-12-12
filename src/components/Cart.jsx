// import { useContext } from "react";
import "../css/index.css";
import CardCart from "./CardCart";

const Cart = () => {
  // const [layoutCart, setLayoutCart] = useContext("")
  return (
    <div className="w-1/3 h-screen bg-white fixed right-0 z-10">
      <div className="bg-black text-white flex justify-between px-4">
        <p>3 Items</p>
        <p>Cart Saya</p>
        <button>
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
