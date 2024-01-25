import "../css/index.css";
import CardDetails from "./CardDetails";

const TransactionDetails = ({ orders, onClose }) => {
  const handleShippingMethod =(method)=>{
    if(method === "standard"){
      console.log(orders.total_price + 10000)
      const price = orders.total_price + 10000
     return formatCurrency(price)
    }else{
      const price = orders.total_price + 10000
      return formatCurrency(price)
    }
  };

  const handleShippingPrice=(method)=>{
    if(method === "standard"){
      return formatCurrency(10000)
    }else{
      return formatCurrency(20000)
    }
  }

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
    {console.log(orders)}
      <div className="card-details pointer-events-auto rounded-lg bg-black fixed top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-1/2 text-left rounded-lg">
          <div className="card-title flex justify-between mb-4 p-5">
            <h1>Detail Transaksi</h1>
            <button onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <hr />
          <div className="status my-4 border-b-8 border-solid border-gray-200 px-5">
            <h1 className="">{orders.payment_status}</h1>
            <div className="flex justify-between">
              <p>No. Invoice</p>
              <p className="font-bold">INV/20230828/MPL/3426262655</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Tanggal Pembelian</p>
              <p className="font-bold">{orders.created_at}</p>
            </div>
          </div>
          <div className="product-details border-b-8 border-solid border-gray-200 px-5">
            <h1>Detail Produk</h1>
            <CardDetails data={orders}/>
          </div>
          <div className="shipment-details border-b-8 border-solid border-gray-200 px-5">
            <h1 className="mb-2 mt-4">Informasi Pengiriman</h1>
            <div className="item-shipment flex">
              <p className="w-20 flex-none">Kurir</p>
              <p className="w-4 flex-none">:</p>
              <p className="grow">Kurir Rekomendasi - Reguler</p>
            </div>
            <div className="item-shipment flex">
              <p className="w-20">No Resi</p>
              <p className="w-4">:</p>
              <p>TKP01-EG7DDPX1</p>
            </div>
            <div className="item-shipment flex">
              <p className="w-20">Alamat</p>
              <p className="w-4">:</p>
              <div>
                <p className="font-bold">{orders.name}</p>
                <p className="mb-4">
                  {orders.phone_number} <br />
                  {orders.address}<br/>
                </p>
              </div>
            </div>
          </div>
          <div className="payment-details px-5">
            <h1 className="mt-4">Rincian Pembayaran</h1>
            <div className="flex justify-between">
              <p>Metode Pembayaran</p>
              <p>Gopay</p>
            </div>
            <hr className="my-2" />
            <div className="payment-content flex justify-between">
              <p>Total Harga ({orders.quantity})</p>
              <p>{formatCurrency(orders.total_price)}</p>
            </div>
            <div className="payment-content flex justify-between">
              <p>Total Ongkos Kirim</p>
              <p>{handleShippingPrice(orders.shipment_method)}</p>
            </div>
            <hr className="my-2" />
            <div className="payment-content flex justify-between mb-4">
              <p>Total Belanja</p>
              <p className="font-bold">{handleShippingMethod(orders.shipment_method)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionDetails;
