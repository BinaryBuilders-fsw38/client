import "../css/index.css";
import FotoProduct from "../images/skincare.jpg";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import Tracking from "./Tracking";
import TransactionDetails from "./TransactionDetails";


const CardOrderTrack = () => {
  const [overlay, setOverlay] = useState(false);
  const [overlay2, setOverlay2] = useState(false);

  const handleClick2 = () => {
    setOverlay2(true)
  }

  const handleClick = () => {
    setOverlay(true);
  };

  return (
    <>
      <div className=" rounded-md mt-2 max-w-4xl mx-auto p-6 bg-white shadow-lg border mb-4">
        <div className="-mt-5 ">
          <div className="w-auto flex gap-2">
            {/* <h2 className="text-2xl font-semibold mb-4">Order Form</h2> */}
            <h1 className="font-bold text-sm ">Belanja</h1>
            <h4 className="font-bold text-sm text-gray-500">1 Des 2023</h4>
            <h4 className="font-bold text-sm text-gray-500  bg-slate-600 text-white h-5 rounded-md px-2">
              Berhasil
            </h4>
            <h4 className="font-bold text-sm text-slate-500">
              IVR/20230101/XXIII/XII/1298378
            </h4>
          </div>
          <h1 className="font-bold mt-2">Hrny official store</h1>
          <div className="w-full  xl:flex lg:flex md:flex mt-1 justify-between">
            <div className="w-20 ml-4 flex gap-3">
              <img src={FotoProduct} alt="" />
              <div className="w-auto">
                <h1 className="w-80 text-md ">Parfum anti bacterial</h1>
                <h3 className="text-sm font-semibold text-slate-500">
                  1 barang x 150.000
                </h3>
                <h3 className="text-sm font-semibold text-slate-500 mt-3">
                  +2 product lainnya
                </h3>
              </div>
            </div>
            <div className=" mr-20 p-6 border-zinc-200  border-l">
              <h2 className="text-sm font-semibold text-gray-600">
                Total Harga
              </h2>
              {/* Tampilkan ringkasan pesanan, misalnya: */}
              {/* <p>Produk: {formData.product}</p> */}
              <h1 className="font-bold text-zinc-90 text-lg">Rp.300.000</h1>
            </div>
          </div>
        </div>
        <div className="max-w-full flex justify-end gap-3 items-center mt-10">
          <button>
            <h4 className="text-sm font-bold text-slate-900"
            onClick={handleClick2}>
              Lihat Detail Transaksi
            </h4>
          </button>
          <div className="button flex gap-4 ">
            <button className="border-2 border-none bg-slate-900 text-sm px-16 py-1 font-semibold text-white rounded-md" onClick={handleClick}>
              Lacak
            </button>
          </div>
          <button className="ml-5 border px-1 py-1 rounded-md border-gray-300">
            <FiMoreHorizontal className="text-2xl font-bold" />
          </button>
        </div>
      </div>
      {overlay &&  <Tracking onClose={() => setOverlay(false)} />}
      {overlay2 &&  <TransactionDetails onClose={() => setOverlay2(false)} />}
    </>
  );
};

export default CardOrderTrack;
