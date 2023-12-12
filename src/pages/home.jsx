import "../css/index.css";
import Navbar from "../components/Nav";
import Footer from "../components/footer";
import Hero from "../components/hero";
import HomeCategory from "../components/HomeCategory";
import Cart from "../components/Cart";
import "../css/home.css";
import Haum from "../images/haum.png";
import Kahf from "../images/kahf.png";
import Norm from "../images/norm.png";
import Ustraa from "../images/ustraa.png";
import Avoskin from "../images/avoskin.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-slate-900 ">
        <Cart />
        <Hero />
      </div>
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto h-screen">
        <h1 className="text-center text-6xl font-bold ">
          Allocating resources to your own self-care <br />
          is the most valuable investment
          <br /> you can ever make.
        </h1>
        <h3 className="text-2xl text-center mt-10">
          Mengapa begitu? Tubuh kita adalah aset penting yg dibawa hingga tua
          <br />
          Maka dari itu aset ini harus kita jaga serta lindungi dengan cara
          merawat, menjaga kesehatan dan kebersihannya
        </h3>
      </div>
      <div className="bg-slate-900 text-center text-white py-10">
        <div id="parter" className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold my-8">Brand Partners</h1>
          <h4 className="text-2xl my-8">
            Kolaborasi berbagai brand dengan kami yang dipercaya untuk segala
            kebutuhan perawatan dirimu
          </h4>
          <div className="flex justify-around my-20">
            <img
              className="w-60 transform transition-transform hover:scale-125"
              src={Ustraa}
              alt=""
            />
            <img
              className="w-60 transform transition-transform hover:scale-125"
              src={Norm}
              alt=""
            />
            <img
              className="w-60 transform transition-transform hover:scale-125"
              src={Avoskin}
              alt=""
            />
          </div>
          <div className="flex justify-around my-24">
            <img
              className="w-60 transform transition-transform hover:scale-125"
              src={Haum}
              alt=""
            />
            <img
              className="w-60 transform transition-transform hover:scale-110"
              src={Kahf}
              alt=""
            />
          </div>
        </div>
      </div>
      <HomeCategory />
      <Footer />
    </>
  );
};

export default Home;
