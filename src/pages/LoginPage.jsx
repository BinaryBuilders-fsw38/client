import Footer from "../components/footer";
import Navbar from "../components/navbar";
import MiniNavbar from "../components/miniNavbar";
import Login from "../components/Login";

const LoginPage = () => {
    return (
    <>
        <Navbar />
        <MiniNavbar/>
            <div className="LoginPage">
                <Login />
            </div>
        <Footer/>
    </>
        
    );
  };
  
  export default LoginPage;