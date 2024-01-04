import "../css/index.css";

const LoginAdmin = () => {
  return (
    <div className="space-y-12 mx-auto w-full max-w-7xl max-sm:px-6 max-md:px-8 max-lg:px-10 max-xl:px-12">
      <div className="border-b border-gray-900/10 pb-12 mt-20">
        <div className="flex flex-wrap -mx-2">
          {/* Bagian kiri */}
          <div className="login w-full md:w-1/2 px-2 text-left">
            <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-10">
              Login Admin
            </h1>

            <div className="username">
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Username
              </p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="username"
                />
              </div>
            </div>

            <div className="password">
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Password
              </p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="password"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="password"
                />
              </div>
            </div>

            <button className="bg-black text-white font-bold py-1 sm:py-1 md:py-2 lg:py-2 xl:py-2 px-2 sm:px-2 md:px-3 lg:px-4 xl:px-3 rounded mb-2 text-sm sm:text-base md:text-md lg:text-md xl:text-md">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
