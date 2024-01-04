import "../css/index.css";

const Register = () => {
  return (
    <div className="flex mt-20 max-w-7xl mx-auto max-sm:px-6 max-md:px-8 max-lg:px-10 max-xl:px-12">
      <div className="m-auto w-full">
        <div className="flex flex-wrap -mx-2">
          <div className="register w-full md:w-1/2 px-2 text-left">
            <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">
              Register pelanggan
            </h1>
            <div className="dataDiri mt-10">
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Nama Depan
              </p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div className="dataDiri">
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Nama Belakang
              </p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div className="dataDiri">
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Email
              </p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div className="dataDiri">
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Password
              </p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div className="dataDiri mb-16">
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Konfirmasi Password
              </p>
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
              <p className="ml-5 mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Daftar untuk berlangganan
              </p>
            </div>

            <button className="bg-black text-white font-bold py-1 sm:py-1 md:py-2 lg:py-2 xl:py-2 px-2 sm:px-2 md:px-3 lg:px-4 xl:px-3 rounded mb-2 text-sm sm:text-base md:text-md lg:text-md xl:text-md">
              BUAT AKUN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
