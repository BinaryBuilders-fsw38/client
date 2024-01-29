import "../css/index.css";
import { formatCurrency } from "../utils/formatPricing";
import apiUrl from "../utils/apiConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Payment = ({
  cart_id,
  productName,
  productPrice,
  productFile,
  quantity,
  totalPrice,
  address,
  checkoutID,
  userID,
}) => {
  const [metodePembayaran, setMetodePembayaran] = useState("");
  const navigate = useNavigate();

  const insertPayment = async () => {
    const url = `${apiUrl}/payment/process-payment/${userID} `;
    console.log(metodePembayaran);
    try {
      const response = await axios.post(url, {
        payment_method: metodePembayaran,
        checkout_id: checkoutID,
      });
      navigate("/order");
    } catch (error) {
      console.error("Terjadi kesalahan saat melakukan pembayaran:", error);
    }
  };

  return (
    <>
      <div className="flex mt-10">
        <div className="mx-auto w-full max-w-7xl max-sm:px-3">
          <div className="xl:flex lg:flex  flex-wrap -mx-2">
            {/* Bagian kiri */}
            <div className="xl:w-3/4 lg:w-3/4  pr-5 pl-10">
            <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">
              Pembayaran
            </h1>
              <div>
                <div key={checkoutID}>
                  {/* Detail Produk */}
                  <div className="detail produk flex items-center border border-black rounded-md pb-5 mb-5">
                    <div className="w-1/4 pr-5">
                      <img
                        src={productFile}
                        alt="product"
                        className="rounded-md"
                      />
                    </div>

                    <div className="w-3/4">
                      <div className="namaProduct mb-2">{productName}</div>
                      <div className="harga mb-2">
                        Harga: {formatCurrency(productPrice)}
                      </div>
                      <div className="quantity mb-2">Quantity: {quantity}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metode Pembayaran dan Pengiriman */}
              <div className="mb-5">
                <div className="alamat mb-2">
                <label
                    htmlFor="alamat"
                    className="block text-sm  xl:text-lg lg:text-md"
                  >
                    <b>Alamat :</b> {address}
                  </label>
                </div>
                <div className="flex mb-2 pt-5">
                  <div className="w-1/2 pr-2">
                    <label htmlFor="metodePengiriman" className="block text-sm  xl:text-lg lg:text-md pb-2">
                      <b>Metode Pembayaran:</b>
                    </label>
                    <select
                      id="metodePembayaran"
                      className="w-full xl:p-2 lg:p-2 p-1 border rounded text-sm  xl:text-lg lg:text-md"
                      value={metodePembayaran}
                      onChange={(e) => setMetodePembayaran(e.target.value)}
                    >
                      <option value="" disabled hidden>
                        Pilih metode pembayaran
                      </option>
                      <option value="gopay">Gopay</option>
                      <option value="va">Virtual Account</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian kanan */}
            <div className="xl:w-1/4 xl:pl-5 lg:w-1/4 lg:pl-5 pl-11  pt-10">
              <div className="totalBelanja mb-5">
                <span className="font-bold text-sm  xl:text-lg lg:text-md">
                  Total Belanja :{" " + formatCurrency(productPrice)}
                </span>
              </div>
              <div className="totalOngkir mb-5">
                <span className="font-bold text-sm  xl:text-lg lg:text-md">Total Ongkir :</span>{" "}
                {formatCurrency(totalPrice - productPrice)}
              </div>
              <div className="totalHarga mb-5 font-extrabold text-sm  xl:text-lg lg:text-md">
                Total : {formatCurrency(totalPrice)}
              </div>
              <button
                onClick={insertPayment}
                className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm px-3 py-1 sm:px-3 sm:py-1 sm:text-base md:px-6 md:py-2 md:text-lg lg:px-6 lg:py-2 lg:text-xl"
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
