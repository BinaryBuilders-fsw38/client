import "../css/index.css";
import Banner from "../images/banneralt.png";
import "../css/hero.css";

const Hero = () => {
  return (
    <div className="flex max-w-7xl items-center mx-auto">
      <div>
        <h1 className="tagline text-6xl font-extrabold">
          UNLOCK YOUR HANDSOME POTENTIAL
        </h1>
        <h3 className="text-xl mt-3">
          Unveil a new level of confidence and redefine your image with our
          tailored men's skincare solutions, experiencing the transformation
          that comes from a dedicated skincare routine exclusively for men.
        </h3>
      </div>
      <div>
        <img src={Banner} alt="hero profile" />
      </div>
    </div>
  );
};

export default Hero;
