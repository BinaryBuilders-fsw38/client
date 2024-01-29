import "../css/index.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const result = await login(username, password);
    console.log(username, password, `data untuk axios`);
    console.log(result, `ini result`);

    if (result.success) {
      toast.success("Login berhasil!");
      setTimeout(() => {
        navigate("/");
      }, 1000); // Ubah jumlah milidetik sesuai kebutuhan Anda
    } else {
      console.error("Login failed:", result.error);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="flex mt-20">
      <ToastContainer />

      <div className="mx-auto w-full max-w-7xl max-sm:px-6 max-md:px-8 max-lg:px-10 max-xl:px-12">
        <div className="flex flex-wrap -mx-2">
          {/* Bagian kiri */}
          <div className="login w-full md:w-1/2 px-2 text-left">
            <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">
              Login pelanggan
            </h1>

            <div className="keterangan mt-10">
              <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl">
                PELANGGAN TERDAFTAR
              </p>
              <div className="input border-t-2 border-gray-200 mb-4"></div>
              <p className="mb-2 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Jika kamu sudah mempunyai akun, silahkan masuk dengan email.
              </p>
            </div>

            <div className="email">
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Username
              </p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <button
              className="bg-black text-white font-bold py-1 sm:py-1 md:py-2 lg:py-2 xl:py-2 px-2 sm:px-2 md:px-3 lg:px-4 xl:px-3 rounded mb-2 text-sm sm:text-base md:text-md lg:text-md xl:text-md"
              onClick={handleLogin}
            >
              MASUK
            </button>

            <div className="lupaPass mb-2">
              <a href="/" className="text-sm text-black">
                Lupa Password
              </a>
            </div>
          </div>

          {/* Bagian kanan */}
          <div className="w-full md:w-1/2 px-2 text-left pb-5">
            <div className="keterangan" style={{ marginTop: "76px" }}>
              <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl">
                PELANGGAN BARU
              </p>
              <div className="border-t-2 border-gray-200 mb-4"></div>
              <p className="mb-2 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Membuat akun akan mendapatkan benefit : checkout dengan cepat,
                simpan lebih dari satu alamat pengiriman, lacak pembelian and
                masih banyak lagi.
              </p>
            </div>

            <button
              className="bg-black text-white font-bold py-1 sm:py-1 md:py-2 lg:py-2 xl:py-2 px-2 sm:px-2 md:px-3 lg:px-4 xl:px-3 rounded mb-2 text-sm sm:text-base md:text-md lg:text-md xl:text-md"
              onClick={handleRegister}
            >
              DAFTAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
