import Footer from "../components/Footer";
import NavbarUser from "../components/NavbarLoginRgist";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <>
      <NavbarUser/>
      <div className="LoginPage">
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
