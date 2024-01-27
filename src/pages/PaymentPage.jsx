import { useLocation } from "react-router-dom";
import Payment from "../components/Payment";
import React, { useEffect, useState } from "react";
import apiUrl from "../utils/apiConfig";
import axios from "axios";

const PaymentPage = () => {
  const location = useLocation();
  const cartID = location.pathname.split("/")[2];
  const [dataCheckout, setDataCheckout] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${apiUrl}/payment/get/${cartID}`;
      try {
        const dataCheckoutFromServer = await axios.get(url);
        console.log(dataCheckoutFromServer, "ini DATA");

        const result = dataCheckoutFromServer.data.data;
        setDataCheckout(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="PaymentPage">
        {dataCheckout ? (
          dataCheckout.map((item) => (
            <Payment
              key={item.checkout_id}
              productName={item.product_name}
              productPrice={item.price}
              productFile={item.product_file}
              quantity={item.quantity}
              totalPrice={item.total_price}
              address={item.address}
              checkoutID={item.checkout_id}
              userID={item.user_id}
            />
          ))
        ) : (
          <p>Keranjang Anda kosong.</p>
        )}
      </div>
    </>
  );
};

export default PaymentPage;
