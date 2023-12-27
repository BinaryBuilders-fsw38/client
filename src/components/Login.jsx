import "../css/index.css";
import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate()

const handleAddData = function () {
  const inputUser = {
    username,
    password,
  }
  userLogin(inputUser)
}

const userLogin = async function (inputUser) {
  try {
    const userLoginFromServer = await axios({
      method: "POST",
      url: "http://localhost:3000/user/login",
      data: inputUser 
    })
    if (userLoginFromServer.data.status === "Success") {
      console.log("okee login");
      navigate('/')
    }
  } catch (error) {
    console.log(error, '===> error catch');
  }
}

  return (
    <div className="flex mt-20">
      <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8 md:px-10 xl:px-12">
        <div className="flex flex-wrap -mx-2">
          {/* Bagian kiri */}
          <div className="login w-full md:w-1/2 px-2 text-left">
            <h1 className="text-3xl font-bold mb-2">Login pelanggan</h1>

            <div className="keterangan mt-10">
              <p className="mb-4">PELANGGAN TERDAFTAR</p>
              <div className="input border-t-2 border-gray-200 mb-4"></div>
              <p className="mb-2">
                Jika kamu sudah mempunyai akun, silahkan masuk dengan email.
              </p>
            </div>

            <div className="email">
              <p className="mb-1">Username</p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="username"
                  onChange={(e) => {setUsername(e.target.value)}}
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
                  onChange={(e) => {setPassword(e.target.value)}}
                />
              </div>
            </div>

            <button className="bg-black text-white font-bold py-2 px-4 rounded mb-2" onClick={handleAddData}>
              MASUK
            </button>

            <div className="lupaPass">
              <a href="/" className="text-sm text-black">
                Lupa Password
              </a>
            </div>
          </div>

          {/* Bagian kanan */}
          <div className="w-full md:w-1/2 px-2 text-left">
            <div className="keterangan" style={{ marginTop: "76px" }}>
              <p className="mb-4">PELANGGAN BARU</p>
              <div className="border-t-2 border-gray-200 mb-4"></div>
              <p className="mb-2">
                Membuat akun akan mendapatkan benefit : checkout dengan cepat,
                simpan lebih dari satu alamat pengiriman, lacak pembelian and
                masih banyak lagi.
              </p>
            </div>

            <button className="bg-black text-white font-bold py-2 px-4 rounded">
              DAFTAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
