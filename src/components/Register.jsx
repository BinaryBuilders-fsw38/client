import "../css/index.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiUrl from "../utils/apiConfig";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const handleAddData = function () {
    const inputUser = {
      username: username,
      password: password,
      email: email,
      name: name,
      address: address,
      phone_number: phone_number,
    };
    userRegister(inputUser);
    console.log(inputUser, " => input user");
  };

  const userRegister = async function (inputUser) {
    try {
      const userRegisterFromServer = await axios({
        method: "POST",
        url: `${apiUrl}/user/register`,
        data: inputUser,
      });
      if (userRegisterFromServer.data.status === "success") {
        // console.log(userRegisterFromServer.data.status);
        const name = userRegisterFromServer.data.data[0].name;
        const email = userRegisterFromServer.data.data[0].email;
        navigate("/login", { state: { name, email } });
      }
    } catch (error) {
      console.log(error, "===> error catch");
    }
  };

  return (
    <div className="flex mt-20 max-w-7xl mx-auto max-sm:px-6 max-md:px-8 max-lg:px-10 max-xl:px-12">
      <div className="m-auto w-full">
        <div className="flex flex-wrap -mx-2">
          <div className="register w-full md:w-1/2 px-2 text-left">
            <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">
              Register pelanggan
            </h1>
            <div className="namaDepan mt-10">
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Nama
              </p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="nama anda"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="namaBelakang">
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Username
              </p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="username anda"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="email">
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Email
              </p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="email anda"
                  onChange={(e) => {
                    setEmail(e.target.value);
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
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="harus mengandung huruf besar, angka, dan symbol"
                  style={{ fontSize: "0.875rem" }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="confrimPassword">
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Alamat
              </p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="alamat anda"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="confrimPassword mb-10">
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                Nomor Handphone
              </p>
              <div className="border-b-2 border-gray-200 py-2 mb-4">
                <input
                  type="text"
                  className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="nomor hp anda"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
            </div>

            <button
              className="bg-black text-white font-bold py-1 sm:py-1 md:py-2 lg:py-2 xl:py-2 px-2 sm:px-2 md:px-3 lg:px-4 xl:px-3 rounded mb-2 text-sm sm:text-base md:text-md lg:text-md xl:text-md"
              onClick={handleAddData}
            >
              BUAT AKUN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
