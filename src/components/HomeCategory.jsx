import "../css/index.css";
import Bodycare from "../images/bodycare.jpg";
import SkinCare from "../images/skincare.jpg";
import HairCare from "../images/haircare.jpg";

const HomeCategory = () => {
  return (
    <div className="my-16">
      <h1 className="text-center text-4xl font-bold m-8">
        Discover Our Skincare Products
      </h1>
      <h3 className="text-center text-2xl m-5">
        Discover the key to a vibrant and well-groomed skin, with customized
        solutions for your specific skincare requirements
      </h3>
      <div className="flex justify-between max-w-7xl mx-auto my-16 flex-wrap md:flex-row md:items-center">
        <div className="max-w-sm relative rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img className="object-cover" src={SkinCare} alt="Card" />
          </a>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-40">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-xl hover:underline"
            >
              Skin Care
            </a>
          </div>
        </div>
        <div className="max-w-sm relative rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img className="object-cover" src={Bodycare} alt="Card" />
          </a>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-40">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-xl hover:underline"
            >
              Body Care
            </a>
          </div>
        </div>
        <div className="max-w-sm relative rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img className="object-cover" src={HairCare} alt="Card" />
          </a>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-40">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-xl hover:underline"
            >
              Hair Care
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
