import "../css/index.css";
import FotoProduct from "../images/skincare.jpg";

const CardDetails = (data) => {
  function formatCurrency(total){
    const price = typeof total === 'number' ? total : parseFloat(total)
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
    return formattedPrice;
  }
  return (
    <>
    {/* {console.log(data.data)} */}
      <div className="card-product rounded-md border border-slate-300 my-4 p-4">
        <div className="wrapper-product flex justify-between">
          <div className="product-info flex">
            <img src={data.data.product_file} alt="Product" className="img w-14" />
            <div className="price-title">
              <a className="font-bold" href="/">
                {data.data.product_name}
              </a>
              <p>{data.data.quantity} barang x {formatCurrency(data.data.price)}</p>
            </div>
          </div>
          <div className="price-action-info">
            <div className="total-price pr-4 text-right">
              <p>Total Harga</p>
              <p className="font-bold">{formatCurrency(data.data.total_price)}</p>
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
