import Footer from "../components/footer";
import Navbar from "../components/Nav";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <>
      <Navbar />

      <div className="LoginPage">
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
