import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Navbar from "../components/Nav";
import { CartProvider } from "../context/CartContext";
import "../css/index.css";
import axios from "axios";
import CardProduct from "../components/CardProduct";

const ProductRecommendation = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [skinType, setSkinType] = useState(0); // Nilai awal sesuai kebutuhan
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(
          `http://localhost:3000/product/suggest/${skinType}`
        );
        if (response.data.status === "success") {
          setRecommendedProducts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching recommended products:", error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchRecommendedProducts();
  }, [skinType]);

  const handleSkinTypeChange = (event) => {
    const type = parseInt(event.target.value);
    setSkinType(type);
  };

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <CartProvider>
        <Navbar />
        <div className="absolute">
          <Cart />
        </div>
      </CartProvider>
      <div className="mt-24 max-w-7xl mx-auto mb-20 sm:mr-10 sm:ml-10  xl:mr-auto xl:ml-auto">
        <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2 text-transform: uppercase mb-5">
          Selamat Datang di Konsultasi Kulit Anda!
        </h1>
        <div className="flex items-center">
          <img
            className=" w-1/3 mr-32"
            src="https://img.freepik.com/premium-vector/doctor-vector-illustration_488994-153.jpg?w=2000"
            alt="doctor"
          />
          <div>
            <p
              className="mb-1 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              style={{ textAlign: "justify" }}
            >
              👩‍⚕️ Dokter Kulit Virtual kami akan membantu Anda menemukan produk
              yang paling sesuai dengan jenis kulit Anda. Kami memahami betapa
              pentingnya memilih produk yang tepat untuk menjaga kesehatan dan
              keindahan kulit Anda.
            </p>
          </div>
        </div>
        <div className="instruction my-20">
          <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">
            Instruksi:
          </h1>
          <ol className="text-xl">
            <li>
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
                <span className="mr-7 text-center">1.</span>
                Pilih tipe kulit Andapada dropdown di bawah.
              </p>
            </li>
            <li>
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
                <span className="mr-4 text-center">2.</span> kami akan
                memberikan rekomendasi produk berdasarkan tipe kulit yang Anda
                pilih.
              </p>
            </li>
            <li>
              <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
                <span className="mr-4 text-center">3.</span> Temukan produk yang
                sesuai dengan kebutuhan kulit Anda dan jadikan kulit Anda tampak
                sehat dan bercahaya!
              </p>
            </li>
          </ol>
        </div>
        <div className="dropdown">
          <select
            onChange={handleSkinTypeChange}
            value={skinType}
            className="block w-full mt-4 p-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled selected className="text-gray-500">
              Pilih Tipe Kulit Anda
            </option>
            <option value="1" className="py-2">
              Kulit Berminyak
            </option>
            <option value="2" className="py-2">
              Kulit Normal
            </option>
            <option value="3" className="py-2">
              Kulit Kering
            </option>
            <option value="4" className="py-2">
              Kulit Kombinasi
            </option>
          </select>
        </div>
      </div>
      <div className="flex justify-center max-w-7xl mx-auto flex-wrap mb-11">
        <CardProduct products={recommendedProducts} />
      </div>
      <Footer />
    </>
  );
};

export default ProductRecommendation;
