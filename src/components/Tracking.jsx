import "../css/index.css";

const Tracklist = ({ onClose }) => {
    return(
        <>
      <div className="tracking pointer-events-auto rounded-lg bg-black fixed top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-1/2 text-left rounded-lg">
        <div className="card-title flex justify-between mb-4 p-5">
            <h1 className="font-bold">Lacak</h1>
            <button onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        <div className="p-4 border bg-yellow-100 justify-center place-content-center">
        <h2 className="text-lg font-bold mb-2 justify-center items-center">Detail Transaksi</h2>
        <div className="w-100 space-y-4 justify-center place-content-center">
          <div className="flex items-center space-x-5 justify-center place-content-center">
              <p className="text-sm text-gray-500">1 Okt 2023, 17:01 WIB</p>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div>
              <p className="font-semibold">Transaksi Selesai</p>
            </div>
          </div>
          <div className="flex items-center space-x-5 justify-center place-content-center">
              <p className="text-sm text-gray-500">1 Okt 2023, 17:01 WIB</p>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div>
              <p className="font-semibold">Transaksi Selesai</p>
            </div>
          </div>
          <div className="flex items-center space-x-5 justify-center place-content-center">
              <p className="text-sm text-gray-500">1 Okt 2023, 17:01 WIB</p>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div>
              <p className="font-semibold">Transaksi Selesai</p>
            </div>
          </div>
          <div className="flex items-center space-x-5 justify-center place-content-center">
              <p className="text-sm text-gray-500">1 Okt 2023, 17:01 WIB</p>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div>
              <p className="font-semibold">Transaksi Selesai</p>
            </div>
          </div>
          <div className="justify-between justify-center items-center ">
            <button className="w-full rounded bg-blue-800 text-white font-bold mb-2">Beri Ulasan</button>
            <button className="w-full rounded bg-blue-800 text-white font-bold mb-2">Chat Penjual</button>
            <button className="w-full rounded bg-blue-800 text-white font-bold mb-2">Bantuan</button>
          </div>
        </div>
      </div>
      </div>
      </div>
  
        </>
    );
};
export default Tracklist;