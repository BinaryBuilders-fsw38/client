import "../css/index.css";
import { useNavigate } from "react-router-dom";

const CardCart = ({ productName, productPrice, productFile, cart_id }) => {
  const formatCurrency = (amount) => {
    // Menggunakan fungsi Intl.NumberFormat untuk mengubah format angka ke format mata uang
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  const navigate = useNavigate();

  const handleCheckout = (cartID) => {
    navigate(`/checkout/${cartID}`);
  };
  return (
    <div className="my-4 px-4">
      <div className=" relative float-left w-20">
        <a href="/">
          <img
            src={productFile || "https://via.placeholder.com/150"} // Gunakan productFile untuk src gambar; jika null, gunakan placeholder
            alt={productName}
          />
        </a>
      </div>
      <a href="/" className=" font-extrabold">
        {productName}
      </a>

      <div className="flex justify-between">
        <div className="flex">
          <p>QTY</p>
          <button>
            <p>
              <i className="fa-solid fa-less-than mx-2"></i>
            </p>
          </button>
          <p> 1 </p>
          <button>
            <p>
              <i className="fa-solid fa-greater-than ml-2"></i>
            </p>
          </button>
        </div>
        <div>
          <p className="font-extrabold">{formatCurrency(productPrice)}</p>
        </div>
      </div>
      <div className=" flex flex-col justify-center align-middle">
        <button>
          <i className="fa-solid fa-x float-right my-3"></i>
        </button>
        <button
          type="button"
          value={cart_id}
          onClick={() => handleCheckout(cart_id)}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-60 float-left"
        >
          <span>
            <i class="fa-solid fa-credit-card"></i> Checkout this Product
          </span>
        </button>
      </div>
      <hr className="flex w-11/12 mx-auto mt-3" />
    </div>
  );
};

export default CardCart;
