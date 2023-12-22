import MiniNavbar from "../components/MiniNavbar";
import LoginAdmin from "../components/LoginAdmin";

const LoginPageAdmin = () =>{
    return(
        <>
        <MiniNavbar />
        <div className="LoginPageAdmin">
            <LoginAdmin />
        </div>
        </>
    );
};

export default LoginPageAdmin;