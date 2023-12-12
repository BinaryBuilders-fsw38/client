import Footer from "../components/footer";
import Navbar from "../components/Nav";
import Register from "../components/Register";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="RegisterPage">
        <Register />
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
