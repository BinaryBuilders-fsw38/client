import Checkout from "../components/Checkout";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CheckoutPage = () => {
  const { id } = useParams();

  return (
    <>
      <div className="PaymentPage">
        <Checkout />
      </div>
    </>
  );
};

export default CheckoutPage;
