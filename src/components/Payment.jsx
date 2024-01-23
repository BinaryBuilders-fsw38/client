import "../css/index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import apiUrl from "../utils/apiConfig";

const Payment = () => {
  const location = useLocation();
  const CartId = location.pathname.split("/")[2];
  console.log(CartId, "===>");

  const [metodePengiriman, setMetodePengiriman] = useState("");
  const [metodePembayaran, setMetodePembayaran] = useState("");
  const [dataCheckout, setDataCheckout] = useState([]);
  const [shipment, setShipment] = useState("");

  useEffect(() => {
    setMetodePengiriman("");
    setMetodePembayaran("");

    const fetchData = async () => {
      const url = `${apiUrl}/checkout/get/${CartId}`;
      try {
        const dataProductFromServer = await axios.get(url);
        console.log(dataProductFromServer, "ini DATA");
        const result = dataProductFromServer.data.data;
        setDataCheckout(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  let totalPrice = dataCheckout?.[0]?.total_price;
  let alamat = dataCheckout?.[0]?.address;
  return (
    <>
      <div className="flex mt-20">
        <div className="mx-auto w-full max-w-7xl max-sm:px-3">
          <div className="flex flex-wrap -mx-2">
            {/* Bagian kiri */}
            <div className="w-3/4 pr-5 pl-10">
              <h1 className="text-2xl font-bold mb-2">Detail Product</h1>
              <div>
                {dataCheckout ? (
                  dataCheckout.map((item, index) => (
                    <div key={index}>
                      {/* Detail Produk */}
                      <div className="detail produk flex items-center border border-black rounded-md pb-5 mb-5">
                        <div className="w-1/4 pr-5">
                          <img
                            src={item.product_file}
                            alt="product"
                            className="rounded-md"
                          />
                        </div>

                        <div className="w-3/4">
                          <div className="namaProduct mb-2">
                            {item.product_name}
                          </div>
                          <div className="harga mb-2">Harga: {item.price}</div>
                          <div className="quantity mb-2">
                            Quantity: {item.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Tidak ada data Checkout</p>
                )}
              </div>

              {/* Metode Pembayaran dan Pengiriman */}
              <div className="mb-5">
                <h1 className="text-2xl font-bold mb-2">
                  Pengiriman dan Pembayaran
                </h1>
                <div className="alamat mb-2">
                  <label htmlFor="alamat" className="block">
                    Alamat:
                  </label>
                  <p>{alamat}</p>
                </div>
                <div className="flex mb-2 pt-5">
                  <div className="w-1/2 pr-2">
                    <label htmlFor="metodePengiriman" className="block">
                      Metode Pengiriman:
                    </label>
                    <select
                      id="metodePengiriman"
                      className="w-full p-2 border rounded"
                      value={metodePengiriman}
                      onChange={(e) => setMetodePengiriman(e.target.value)}
                    >
                      <option value="" disabled hidden>
                        Pilih metode pengiriman
                      </option>
                      <option value="reguler">Reguler</option>
                      <option value="instant">Instant</option>
                    </select>
                  </div>
                  <div className="w-1/2 pl-2">
                    <label htmlFor="metodePembayaran" className="block">
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
                      <option value="virtual">Virtual Account</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian kanan */}
            <div className="w-1/4 pl-5 pt-10">
              <div className="totalBelanja mb-5">
                <span className="font-bold">
                  Total Belanja :{" " + totalPrice}
                </span>

                {console.log(dataCheckout, "inidatachk")}
              </div>
              <div className="totalOngkir mb-5">
                <span className="font-bold">Total Ongkir :</span> 50,000
              </div>
              <div className="totalHarga mb-5 font-extrabold text-lg">
                Total : 1,547,000
              </div>
              <button className="bg-slate-900 text-white px-4 py-2 rounded-md">
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
