import "../css/index.css";
import FotoProduct from "../images/skincare.jpg";

const CardDetails = () => {
  return (
    <>
      <div className="card-product rounded-md border border-slate-300 my-4 p-4">
        <div className="wrapper-product flex justify-between">
          <div className="product-info flex">
            <img src={FotoProduct} alt="Product" className="img w-14" />
            <div className="price-title">
              <a className="font-bold" href="/">
                Parfum anti bacterial
              </a>
              <p>1 barang x 150.000</p>
            </div>
          </div>
          <div className="price-action-info">
            <div className="total-price pr-4 text-right">
              <p>Total Harga</p>
              <p className="font-bold">Rp 150.000</p>
              <button className=" border-2  border-black text-sm px-16 font-semibold py-1 rounded-md">
                Beli Lagi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
