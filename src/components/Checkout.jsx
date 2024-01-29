import "../css/index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import apiUrl from "../utils/apiConfig";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const CartId = location.pathname.split("/")[2];
  console.log(CartId, "===>");
  const [metodePengiriman, setMetodePengiriman] = useState("");
  const [dataCheckout, setDataCheckout] = useState([]);
  const [ongkir, setOngkir] = useState("");

  useEffect(() => {
    setMetodePengiriman("");

    const fetchData = async () => {
      const url = `${apiUrl}/checkout/get/${CartId}`;
      try {
        const dataCheckoutFromServer = await axios.get(url);
        console.log(dataCheckoutFromServer, "ini DATA");
        const result = dataCheckoutFromServer.data.data;
        setDataCheckout(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [CartId]);

  const handlePengirimanChange = (e) => {
    setMetodePengiriman(e.target.value);
    if (e.target.value === "standard") {
      setOngkir(10000);
    } else if (e.target.value === "express") {
      setOngkir(20000);
    }
  };
  let totalPrices = dataCheckout.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  let alamat = dataCheckout?.[0]?.address;
  const userID = dataCheckout?.[0]?.user_id;

  const navigate = useNavigate();
  // Tambahkan ongkir ke totalPrices
  let total = totalPrices + ongkir;
  const postCheckout = async (cart_id) => {
    const url = `${apiUrl}/checkout/add/${CartId}`;

    try {
      await axios.post(url, {
        idUser: userID, // Kirim di body req
        shipment: metodePengiriman,
      });
      navigate(`/payment/${CartId}`);
    } catch (error) {
      console.error("Terjadi kesalahan saat melakukan pembayaran:", error);
    }
  };
  return (
    <>
      <div className="flex mt-10">
        <div className="mx-auto w-full max-w-7xl max-sm:px-3">
          <div className="xl:flex lg:flex  flex-wrap -mx-2 ">
            {/* Bagian kiri */}
            <div className="xl:w-3/4 lg:w-3/4  pr-5 pl-10">
              <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">
                Checkout
              </h1>
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
                <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-2xl font-bold font-bold mb-2">
                  Pengiriman dan Pembayaran
                </h1>
                <div className="alamat mb-2">
                  <label
                    htmlFor="alamat"
                    className="block text-sm  xl:text-lg lg:text-md"
                  >
                    <b>Alamat :</b> {alamat}
                  </label>
                </div>
                <div className="flex mb-2 pt-5">
                  <div className="w-1/2 pr-2">
                    <label
                      htmlFor="metodePengiriman"
                      className="block text-sm  xl:text-lg lg:text-md pb-2"
                    >
                      <b>Metode Pengiriman:</b>
                    </label>
                    <select
                      id="metodePengiriman"
                      className="w-full xl:p-2 lg:p-2 p-1 border rounded text-sm  xl:text-lg lg:text-md"
                      value={metodePengiriman}
                      onChange={handlePengirimanChange}
                    >
                      <option value="" disabled hidden>
                        Pilih metode pengiriman
                      </option>
                      <option value="standard">Standard</option>
                      <option value="express">Express</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian kanan */}
            <div className="xl:w-1/4 xl:pl-5 lg:w-1/4 lg:pl-5 pl-11  pt-10">
              <div className="totalBelanja mb-5">
                <span className="font-bold text-sm  xl:text-lg lg:text-md">
                  Total Belanja :{" Rp. " + totalPrices.toLocaleString("id-ID")}
                </span>

                {console.log(dataCheckout, "inidatachk")}
              </div>
              <div className="totalOngkir mb-5">
                <span className="font-bold text-sm  xl:text-lg lg:text-md">
                  Total Ongkir :
                </span>{" "}
                <b>{" Rp. " + ongkir.toLocaleString("id-ID")}</b>
              </div>
              <div className="totalHarga mb-5 font-extrabold text-sm  xl:text-lg lg:text-md">
                Total : {" Rp. " + total.toLocaleString("id-ID")}
              </div>
              <button
                onClick={postCheckout}
                className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm px-3 py-1 sm:px-3 sm:py-1 sm:text-base md:px-6 md:py-2 md:text-lg lg:px-6 lg:py-2 lg:text-xl"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
