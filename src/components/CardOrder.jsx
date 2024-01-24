import { useState } from "react";
import "../css/index.css";
import { FiMoreHorizontal } from "react-icons/fi";
import TransactionDetails from "./TransactionDetails";

const CardOrder = ({ dataOrder }) => {
  const [overlay, setOverlay] = useState(false);
  const [selectedData, setSelectedData] = useState();
  if (!dataOrder || !Array.isArray(dataOrder) || dataOrder === undefined) {
    // Handle the case when dataOrder is not defined or not an array
    return <div>No orders available.</div>;
  }

  const handleClick = (item) => {
    setOverlay(true);
    setSelectedData(item);
    // uhuy
    // uhuy
  };
  function formatCurrency(total) {
    const price = typeof total === 'number' ? total : parseFloat(total)
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
    return formattedPrice;
  }
  function convertDate(tanggal) {
    const dateObj = new Date(tanggal)
    const newData = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(dateObj);
    return newData;
  }


  return (
    <>
      {
        dataOrder.map((item) => (
          <div key={item.checkout_id} className=" rounded-md mt-2 max-w-4xl mx-auto p-6 bg-white shadow-lg border mb-4">
            <div className="-mt-5 ">
              <div className="w-auto flex gap-2">
                {/* <h2 className="text-2xl font-semibold mb-4">Order Form</h2> */}
                <h1 className="font-bold text-sm ">Belanja</h1>
                <h4 className="font-bold text-sm text-gray-500">{convertDate(item.created_at)}</h4>
                <h4 className={`font-bold text-sm text-gray-500  ${item.payment_status === 'unpaid' ? 'bg-yellow-300' : 'bg-teal-300'} h-5 rounded-md px-2`}>
                  {item.payment_status}
                </h4>
                <h4 className="font-bold text-sm text-slate-500">
                  IVR/20230101/XXIII/XII/1298378
                </h4>
              </div>
              <h1 className="font-bold mt-2">Hrny official store</h1>
              <div className="w-full flex mt-1 justify-between">
                <div className="w-20 ml-4 flex gap-3">
                  <img src={item.product_file} alt="" />
                  <div className="w-auto">
                    <h1 className="w-80 text-md ">{item.product_name}</h1>
                    <h3 className="text-sm font-semibold text-slate-500">
                      {item.quantity} barang x {formatCurrency(item.price)}
                    </h3>
                    <h3 className="text-sm font-semibold text-slate-500 mt-3">
                      +{item.quantity} product lainnya
                    </h3>
                  </div>
                </div>
                <div className=" mr-20 p-6 border-zinc-200  border-l">
                  <h2 className="text-sm font-semibold text-gray-600">
                    Total Harga
                  </h2>
                  {/* Tampilkan ringkasan pesanan, misalnya: */}
                  {/* <p>Produk: {formData.product}</p> */}
                  <h1 className="font-bold text-zinc-90 text-lg">{formatCurrency(item.total_price)}</h1>
                </div>
              </div>
            </div>
            <div className="max-w-full flex justify-end gap-3 items-center mt-10">
              <button onClick={() => handleClick(item)}>
                <h4 className="text-sm font-bold text-teal-400">
                  Lihat Detail Transaksi
                </h4>
              </button>
              <div className="button flex gap-4 ">
                <button className="border-2 border-teal-300 text-sm px-16 font-semibold text-teal-300 py-1 rounded-md">
                  Ulas
                </button>
                <button className="border-2 border-none bg-teal-300 text-sm px-16 py-1 font-semibold text-white rounded-md">
                  Beli lagi
                </button>
              </div>
              <button className="ml-5 border px-1 py-1 rounded-md border-gray-300">
                <FiMoreHorizontal className="text-2xl font-bold" />
              </button>
            </div>
          </div>
        ))
      }
      {overlay && <TransactionDetails
        orders={selectedData}
        onClose={() => {
          setOverlay(false);
          setSelectedData(null);
        }} />}
    </>
  );
};

export default CardOrder;
