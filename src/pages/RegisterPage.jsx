import Footer from "../components/footer";
import Navbar from "../components/navbar";
import MiniNavbar from "../components/miniNavbar";
import Register from "../components/Register";

const RegisterPage = () => {
    return (
    <>
        <Navbar />
        <MiniNavbar/>
            <div className="RegisterPage">
                <Register />
            </div>
        <Footer/>
    </>
        
    );
  };
  
  export default RegisterPage;