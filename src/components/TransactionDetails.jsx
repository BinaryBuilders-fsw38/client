import "../css/index.css";
import CardDetails from "./CardDetails";

const TransactionDetails = ({ onClose }) => {
  return (
    <>
      <div className="card-details rounded-lg bg-black fixed top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-1/2 text-left">
          <div className="card-title flex justify-between mb-4 p-5">
            <h1>Detail Transaksi</h1>
            <button onClick={onClose}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <hr />
          <div className="status my-4 border-b-8 border-solid border-gray-200 px-5">
            <h1 className="">Selesai</h1>
            <div className="flex justify-between">
              <p>No. Invoice</p>
              <p className="font-bold">INV/20230828/MPL/3426262655</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Tanggal Pembelian</p>
              <p className="font-bold">28 Agustus 2023, 12:59 WIB</p>
            </div>
          </div>
          <div className="product-details border-b-8 border-solid border-gray-200 px-5">
            <h1>Detail Produk</h1>
            <CardDetails />
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
                <p className="font-bold">Sulton Aulia</p>
                <p className="mb-4">
                  6285155170904 <br />
                  Jalan. Kamper 4 no 5 Perumnas Suradita RT 13 RW 04 <br />
                  Cisauk, Kab. Tangerang <br />
                  Banten 15343
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
              <p>Total Harga (1 Barang)</p>
              <p>Rp 150.000</p>
            </div>
            <div className="payment-content flex justify-between">
              <p>Total Ongkos Kirim</p>
              <p>Rp 10.000</p>
            </div>
            <hr className="my-2" />
            <div className="payment-content flex justify-between mb-4">
              <p>Total Belanja</p>
              <p className="font-bold">Rp 160.000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionDetails;
