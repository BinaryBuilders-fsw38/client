import "../css/index.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUrl from "../utils/apiConfig";

const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLoginAdmin = () => {
    const inputAdmin = {
      username,
      password,
    };
    adminLogin(inputAdmin);
  };

  const adminLogin = async (inputAdmin) => {
    try {
      console.log("admin");
      const adminFromServer = await axios({
        method: "POST",
        url: `${apiUrl}/admin/login`,
        data: inputAdmin,
      });
      if (adminFromServer.data.status === "Success") {
        const adminId = adminFromServer.data.data[0].admin_id;
        navigate("/admin/add-article", { state: { adminId: adminId } });
      }
    } catch (error) {
      console.log(error, "=> error dari catch");
    }
  };
  return (
    <div className="flex mt-20">
      <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8 md:px-10 xl:px-12">
        <div className="flex justify-center -mx-0">
          {/* Bagian kiri */}
          <div className="login w-full md:w-1/2 px-2 text-left">
            <h1 className="text-3xl font-bold mb-2 text-center">Login Admin</h1>

            <div className="username">
              <p className="mb-1">Username</p>
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
              <p className="mb-1">Password</p>
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
              onClick={handleLoginAdmin}
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
