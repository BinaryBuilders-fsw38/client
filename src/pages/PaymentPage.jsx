import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import Payment from "../components/Payment";
import { CartProvider } from "../context/CartContext";
import Cart from "../components/Cart";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PaymentPage = () => {
  const { id } = useParams();

  return (
    <>
      <CartProvider>
        <Navbar />
        <div className="absolute">
          <Cart />
        </div>
      </CartProvider>
      <div className="PaymentPage">
        <Payment />
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
