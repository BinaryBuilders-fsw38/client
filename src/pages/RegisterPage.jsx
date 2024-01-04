import Footer from "../components/Footer";
import NavbarUser from "../components/NavbarLoginRgist";
import Register from "../components/Register";

const RegisterPage = () => {
  return (
    <>
      <NavbarUser />
      <div className="RegisterPage">
        <Register />
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
