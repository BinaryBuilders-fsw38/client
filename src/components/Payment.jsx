import "../css/index.css";
import React, { useState, useEffect } from 'react';

const Payment = () => {
  // const [quantity, setQuantity] = useState(1);

  const [metodePengiriman, setMetodePengiriman] = useState('');
  const [metodePembayaran, setMetodePembayaran] = useState('');

  // const increaseQuantity = () => {
  //   setQuantity(quantity + 1);
  // };

  // const decreaseQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  useEffect(() => {
    setMetodePengiriman('');
    setMetodePembayaran('');
  }, []);

  return (
    <div className="flex mt-20">
      <div className="mx-auto w-full max-w-7xl max-sm:px-3">
        <div className="flex flex-wrap -mx-2">
          {/* Bagian kiri */}
          <div className="w-3/4 pr-5 pl-10">
          <h1 className="text-2xl font-bold mb-2">Detail Product</h1>
            {/* Detail Produk */}
            <div className="detail produk flex items-center border border-black rounded-md pb-5 mb-5">
              <div className="w-1/4 pr-5">
                <img
                  src="https://thumbor.sirclocdn.com/unsafe/500x500/filters:format(webp)/magento.bodypack.co.id/media/catalog/product/cache/9923e576b779a380a568c8c3f82e7a7d/9/2/920001810001_-_velixir_blk-1_1024_result.jpg"
                  alt="product"
                  className="rounded-md"
                />
              </div>

              <div className="w-3/4">
                <div className="namaProduct mb-2">Bodypack Velixir Backpack - Black</div>
                <div className="harga mb-2">Harga: 499,000.00</div>
                <div className="quantity mb-2">Quantity: 1</div>
                {/* <div className="flex items-center">
                  <div className="mr-2">Quantity:</div>
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <div className="mx-2">{quantity}</div>
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div> */}
              </div>
            </div>

            {/* Detail Produk 2*/}
            <div className="detail produk flex items-center border border-black rounded-md pb-5 mb-5">
              <div className="w-1/4 pr-5">
                <img
                  src="https://thumbor.sirclocdn.com/unsafe/500x500/filters:format(webp)/magento.bodypack.co.id/media/catalog/product/cache/9923e576b779a380a568c8c3f82e7a7d/9/2/920001810001_-_velixir_blk-1_1024_result.jpg"
                  alt="product"
                  className="rounded-md"
                />
              </div>

              <div className="w-3/4">
                <div className="mb-2">Bodypack Paris 2.0 High Laptop Backpack - Black</div>
                <div className="mb-2">Harga: 499,000.00</div>
                <div className="quantity mb-2">Quantity: 2</div>
              </div>
            </div>

            {/* Metode Pembayaran dan Pengiriman */}
            <div className="mb-5">
              <h1 className="text-2xl font-bold mb-2">Pengiriman dan Pembayaran</h1>
              <div className="alamat mb-2">
                <label htmlFor="alamat" className="block">Alamat:</label>
                <input
                  type="text"
                  id="alamat"
                  className="w-full p-2 border rounded"
                  placeholder="isi alamat anda"
                />
              </div>
              <div className="flex mb-2 pt-5">
                <div className="w-1/2 pr-2">
                  <label htmlFor="metodePengiriman" className="block">Metode Pengiriman:</label>
                  <select
                    id="metodePengiriman"
                    className="w-full p-2 border rounded"
                    value={metodePengiriman}
                    onChange={(e) => setMetodePengiriman(e.target.value)}
                  >
                    <option value="" disabled hidden>Pilih metode pengiriman</option>
                    <option value="reguler">Reguler</option>
                    <option value="instant">Instant</option>
                  </select>
                </div>
                <div className="w-1/2 pl-2">
                  <label htmlFor="metodePembayaran" className="block">Metode Pembayaran:</label>
                  <select
                    id="metodePembayaran"
                    className="w-full p-2 border rounded"
                    value={metodePembayaran}
                    onChange={(e) => setMetodePembayaran(e.target.value)}
                  >
                    <option value="" disabled hidden>Pilih metode pembayaran</option>
                    <option value="gopay">Gopay</option>
                    <option value="virtual">Virtual Account</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian kanan */}
          <div className="w-1/4 pl-5 pt-10">
            <div className="totalBelanja mb-5"><span className="font-bold">Total Belanja :</span> 1,497,000</div>
            <div className="totalOngkir mb-5"><span className="font-bold">Total Ongkir :</span> 50,000</div>
            <div className="totalHarga mb-5 font-extrabold text-lg">Total : 1,547,000</div>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-md">Bayar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;