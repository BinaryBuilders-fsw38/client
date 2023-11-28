import "../css/index.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl items-center mx-auto mt-16">
        <div>
          <h1 className="text-center text-6xl font-bold ">
            "Allocating resources to your own self-care <br /> is the most
            valuable investment
            <br /> you can ever make."
          </h1>
          <h3 className="text-2xl text-center mt-10">
            Mengapa begitu? Tubuh kita adalah aset penting yg dibawa hingga tua.
            Maka dari itu aset ini harus kita jaga serta lindungi dengan cara
            merawat, menjaga kesehatan dan kebersihannya
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
