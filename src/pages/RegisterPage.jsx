import NavbarUser from "../components/NavbarLoginRgist";
import Register from "../components/Register";

const RegisterPage = () => {
  return (
    <>
      <NavbarUser />
      <div className="RegisterPage">
        <Register />
      </div>
    </>
  );
};

export default RegisterPage;
