import Footer from "../components/Footer";
import NavbarUser from "../components/NavbarLoginRgist";
import Payment from "../components/Payment";

const PaymentPage = () => {
  return (
    <>
      <NavbarUser/>
      <div className="PaymentPage">
        <Payment />
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;