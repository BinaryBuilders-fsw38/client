import CardProduct from "../components/CardProduct";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mx-auto">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <Footer />
    </>
  );
};

export default Product;
