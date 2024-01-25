import "../css/index.css";
import HomeCategory from "../components/HomeCategory";
import "../css/home.css";
import Haum from "../images/haum.png";
import Kahf from "../images/kahf.png";
import Norm from "../images/norm.png";
import Ustraa from "../images/ustraa.png";
import Avoskin from "../images/avoskin.png";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <div className="bg-slate-900">
        <Hero />
      </div>
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto h-80 sm:h-80 md:h-80 lg:h-screen xl:h-screen">
        <h1 className="text-center text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold ">
          Allocating resources to your own self-care <br />
          is the most valuable investment
          <br /> you can ever make.
        </h1>
        <h3 className=" text-center mt-10 text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl ml-3 mr-3">
          Mengapa begitu? Tubuh kita adalah aset penting yg dibawa hingga tua
          <br />
          Maka dari itu aset ini harus kita jaga serta lindungi dengan cara
          merawat, menjaga kesehatan dan kebersihannya
        </h3>
      </div>
      <div className="bg-slate-900 text-center text-white py-10">
        <div id="parter" className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold my-8 ">
            Brand Partners
          </h1>
          <h4 className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl my-8 ml-3 mr-3">
            Kolaborasi berbagai brand dengan kami yang dipercaya untuk segala
            kebutuhan perawatan dirimu
          </h4>
          <div className="flex justify-around my-20">
            <img
              className="xl:w-60 lg:w-60 md:w-40 sm:w-20 w-20 transform transition-transform hover:scale-125"
              src={Ustraa}
              alt=""
            />
            <img
              className="xl:w-60 lg:w-60 md:w-40 sm:w-20 w-20 transform transition-transform hover:scale-125"
              src={Norm}
              alt=""
            />
            <img
              className="xl:w-60 lg:w-60 md:w-40 sm:w-20 w-20 transform transition-transform hover:scale-125"
              src={Avoskin}
              alt=""
            />
          </div>
          <div className="flex justify-around my-24">
            <img
              className="xl:w-60 lg:w-60 md:w-40 sm:w-20 w-20 transform transition-transform hover:scale-125"
              src={Haum}
              alt=""
            />
            <img
              className="xl:w-60 lg:w-60 md:w-40 sm:w-20 w-20 transform transition-transform hover:scale-110"
              src={Kahf}
              alt=""
            />
          </div>
        </div>
      </div>
      <HomeCategory />
    </>
  );
};

export default Home;

//Home
