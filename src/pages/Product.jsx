// Import komponen dan library yang diperlukan
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import Cart from "../components/Cart";
import MiniNavbar from "../components/MiniNavbar";
import { CartProvider } from "../context/CartContext";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

// Komponen Product
const Product = () => {
  // State untuk menyimpan data produk, brand, dan jumlah produk yang ditampilkan
  const [dataProduct, setDataProduct] = useState([]);
  const [brand, setBrand] = useState("");
  const [visible, setVisible] = useState(6);

  // Fungsi untuk mendapatkan data produk dari server
  const getDataProduct = useCallback(async () => {
    try {
      const url = brand
        ? `http://localhost:3000/product/get/${brand}`
        : `http://localhost:3000/product/get`;
      const dataProductFromServer = await axios({
        method: "GET",
        url: url,
      });
      console.log(dataProductFromServer, "ini DATA");
      const result = dataProductFromServer.data.data;
      setDataProduct(result);
    } catch (error) {
      console.log(error, "==> error");
    }
  }, [brand]);

  // Memanggil fungsi getDataProduct setiap kali nilai brand berubah
  useEffect(() => {
    getDataProduct();
  }, [brand, getDataProduct]);

  // Fungsi untuk menangani perubahan brand
  const handleBrandChange = (event) => {
    const brand = event.target.value;
    setBrand(brand);
  };

  // Fungsi untuk menangani klik tombol "Load More"
  const loadMore = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  // State untuk menyimpan daftar brand
  const [brands, setBrands] = useState([]);

  // Mendapatkan daftar brand dari server
  useEffect(() => {
    fetch("http://localhost:3000/product/getBrands")
      .then((response) => response.json())
      .then((data) => setBrands(data.data));
  }, []);

  // Render komponen
  return (
    <>
      <CartProvider>
        <Navbar />
        <div className="absolute">
          <Cart />
        </div>
      </CartProvider>
      <div className="flex mt-12 justify-end max-w-7xl mx-auto flex-wrap mb-20">
        <select value={brand} onChange={handleBrandChange}>
          <option value="">Semua Product</option>
          {brands.map((item) => (
            <option value={item.brand}>{item.brand}</option>
          ))}
        </select>
      </div>
      <div className="flex justify-center max-w-7xl  mx-auto flex-wrap mb-11">
        <CardProduct products={dataProduct.slice(0, visible)} />
      </div>
      <div className="flex flex-col items-center ">
        {visible < dataProduct.length && (
          <button
            onClick={loadMore}
            className="border border-gray-500 py-2 px-4 w-full"
          >
            <b>TAMPILKAN SEMUA</b>
            <p className="mb-4">
              Menampilkan {visible} dari {dataProduct.length} Produk
            </p>
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
