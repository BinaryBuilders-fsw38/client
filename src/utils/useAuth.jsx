import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import apiUrl from "./apiConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || {}
  );

  useEffect(() => {
    const storedUserData = localStorage.getItem("userInfo");

    if (storedUserData && isLogin) {
      setUser(JSON.parse(storedUserData));
    }
  }, [isLogin]);

  const login = async (username, password) => {
    try {
      const inputUser = {
        username,
        password,
      };
      const response = await axios({
        method: "POST",
        url: `${apiUrl}/user/login`,
        data: inputUser,
      });


      const { data } = response;

      if (data.message === "success") {
        const { token, getUser } = data.data;

        // Check if getUser is defined and is an array with at least one element
        if (getUser && Array.isArray(getUser) && getUser.length > 0) {
          const userObject = getUser[0];

          localStorage.setItem("token", token);
          localStorage.setItem("userInfo", JSON.stringify(userObject));

          setIsLogin(true);
          setUser(userObject);

          return { success: true, user: userObject };
        } else {
          console.error("Login failed: User data is undefined or empty");
          return { success: false, error: "User data is undefined or empty" };
        }
      } else {
        console.error("Login failed: ", data.message);
        return { success: false, error: data.message };
      }
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, error: error };
    }
  };

  const logout = () => {
    // Implement logic untuk set status login menjadi false
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
