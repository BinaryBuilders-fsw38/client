import "../css/index.css";

const Register = () => {
  return (
    <div className="flex mt-10">
      <div className="m-auto w-full pl-10">
        <div className="flex flex-wrap -mx-2">
          <div className="register w-full md:w-1/2 px-2 text-left">                        
            <div className="dataDiri">
              <p className="mb-1">Nama Depan</p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div className="dataDiri">
              <p className="mb-1">Nama Belakang</p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div className="dataDiri">
              <p className="mb-1">Email</p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div className="dataDiri">
              <p className="mb-1">Password</p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div className="dataDiri mb-16">
              <p className="mb-1">Konfirmasi Password</p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div className="flex items-center mb-10">
              <input type="checkbox" className="mr-2" />
              <p className="ml-5">Daftar untuk berlangganan</p>
            </div>
            
            <button className="bg-black text-white font-bold py-2 px-4 rounded mb-2">
              BUAT AKUN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
