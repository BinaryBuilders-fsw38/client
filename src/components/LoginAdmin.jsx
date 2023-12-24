import "../css/index.css";

const LoginAdmin = () => {
  return (
    <div className="flex mt-20">
      <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8 md:px-10 xl:px-12">
        <div className="flex flex-wrap -mx-2">
          {/* Bagian kiri */}
          <div className="login w-full md:w-1/2 px-2 text-left">
            <h1 className="text-3xl font-bold mb-2">Login Admin</h1>

            <div className="username">
              <p className="mb-1">Username</p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="username"
                />
              </div>
            </div>

            <div className="password">
              <p className="mb-1">Password</p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="password"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="password"
                />
              </div>
            </div>

            <button className="bg-black text-white font-bold py-2 px-4 rounded mb-2">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
