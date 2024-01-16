import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import Checkout from "../components/Checkout";
import { CartProvider } from "../context/CartContext";
import Cart from "../components/Cart";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CheckoutPage = () => {
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
        <Checkout />
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
