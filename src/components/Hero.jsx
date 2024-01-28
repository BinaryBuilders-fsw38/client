import "../css/index.css";
import Banner from "../images/men.png";
import "../css/hero.css";

const Hero = () => {
  return (
    <div className="flex max-w-6xl items-center mx-auto ">
      <div >
        <h1 className="tagline text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-extrabold text-white lg:ml-20 md:ml-10 sm:ml-10 ml-3">
          UNLOCK YOUR HANDSOME POTENTIAL
        </h1>
        <p
          style={{ textAlign: "justify"}}
          className=" mt-2 text-white text-xs sm:text-sm md:text-md lg:text-lg  xl:text-xl lg:ml-20 md:ml-10 sm:ml-10 ml-3"
        >
          Unveil a new level of confidence and redefine your image with our
          tailored men's skincare solutions, experiencing the transformation
          that comes from a dedicated skincare routine exclusively for men.
        </p>
       
      </div>
      <div className="mt-auto">
        <img  src={Banner} alt="hero profile" />
      </div>
      
    </div>
  );
};

export default Hero;
