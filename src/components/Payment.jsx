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
      <div className="flex mt-20">
        <div className="mx-auto w-full max-w-7xl max-sm:px-3">
          <div className="flex flex-wrap -mx-2">
            {/* Bagian kiri */}
            <div className="w-3/4 pr-5 pl-10">
              <h1 className="text-2xl font-bold mb-2">Pembayaran</h1>
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
                  <label htmlFor="alamat" className="block">
                    Alamat:
                  </label>
                  <p>{address}</p>
                </div>
                <div className="flex mb-2 pt-5">
                  <div className="w-1/2 pr-2">
                    <label htmlFor="metodePengiriman" className="block">
                      Metode Pembayaran:
                    </label>
                    <select
                      id="metodePembayaran"
                      className="w-full p-2 border rounded"
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
            <div className="w-1/4 pl-5 pt-10">
              <div className="totalBelanja mb-5">
                <span className="font-bold">
                  Total Belanja :{" " + formatCurrency(productPrice)}
                </span>
              </div>
              <div className="totalOngkir mb-5">
                <span className="font-bold">Total Ongkir :</span>{" "}
                {formatCurrency(totalPrice - productPrice)}
              </div>
              <div className="totalHarga mb-5 font-extrabold text-lg">
                Total : {formatCurrency(totalPrice)}
              </div>
              <button
                onClick={insertPayment}
                className="bg-slate-900 text-white px-4 py-2 rounded-md"
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
