import "../css/index.css";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import FormInputProduct from "../components/FormInputProduct";

const AddProduct = () => {
  return (
    <>
      <Navbar />
      <div className="RegisterPage">
        <FormInputProduct />
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;
