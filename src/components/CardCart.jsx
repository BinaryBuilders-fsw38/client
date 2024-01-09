import "../css/index.css";

const CardCart = ({ productName, productPrice, productFile }) => {
  const formatCurrency = (amount) => {
    // Menggunakan fungsi Intl.NumberFormat untuk mengubah format angka ke format mata uang
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
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
      <button className="float-right">
        <i className="fa-solid fa-x"></i>
      </button>
      <hr className="flex w-11/12 mx-auto mt-3" />
    </div>
  );
};

export default CardCart;
