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

                <div className="tanggal-kirim">
                  <p className="mb-1">Tanggal Kirim</p>
                  <div className="py-2 mb-4">
                    <Date />
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
