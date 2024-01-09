import "../css/index.css";
import Date from '../components/Date';

const FormInputResi = () => {
 
  return (
    <>
      <div className="flex mt-2 max-w-7xl mx-auto">
        <div className="m-auto w-full pl-10">
          <div className="flex flex-wrap -mx-2">
            <div className="register w-full md:w-1/2 px-2 text-left">
              <h1 className="text-3xl font-bold mb-10">Input Resi</h1>
            
              <div className="nomor-order">
                  <p className="mb-1">Nomor Order</p>
                  <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                    <input
                      type="text"
                      className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    />
                  </div>
                </div>

                <div className="alamat">
                  <p className="mb-1">Alamat Penerima</p>
                  <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                    <input
                      type="text"
                      className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    />
                  </div>
                </div>

                <div className="total-berat">
                  <p className="mb-1">Berat Barang</p>
                  <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                    <input
                      type="text"
                      className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    />
                  </div>
                </div>

                <div className="tanggal-kirim">
                  <p className="mb-1">Tanggal Pengiriman</p>
                  <div className="py-2 mb-4">
                    <Date />
                  </div>
                </div>

              <div className="metode-kirim">
                <p className="mb-1">Metode Pengiriman</p>
                <div className="border-b-2 border-gray-200 py-2 mb-4 relative focus-within:border-black hover:border-black">
                  <select
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
                    <option value="" disabled hidden>Pilih Metode Pengiriman</option>
                    <option value="reguler">Reguler</option>
                    <option value="instant">Instant</option>
                    
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6h12l-6 6z" />
                    </svg>
                  </div>
                </div>
              </div>
            
              <div className="notes">
                  <p className="mb-1 ">Catatan</p>
                  <div className="py-2 mb-4">
                    <textarea textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-offset-black focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:border-black" placeholder="Isi Catatan.."/>
                  </div>
                </div>

              <button className="bg-black text-white font-bold py-2 px-4 rounded mb-2">
                Input Resi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormInputResi;
