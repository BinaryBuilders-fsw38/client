import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import MiniNavbar from "../components/MiniNavbar";
import Cart from "../components/Cart";
import { CartProvider } from "../context/CartContext";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Product = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [brand, setBrand] = useState("");
  const [visible, setVisible] = useState(6);

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
  useEffect(() => {
    getDataProduct();
  }, [brand, getDataProduct]);

  useEffect(() => {}, [dataProduct]);

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    setBrand(brand);
  };

  const loadMore = () => {
    // Fungsi untuk menangani klik tombol "Load More"
    setVisible((prevValue) => prevValue + 10);
  };
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/product/getBrands')
      .then(response => response.json())
      .then(data => setBrands(data.data));
  }, []);

  return (
    <>
      <CartProvider>
        <Navbar />
        <MiniNavbar />
        <div className="absolute">
          <Cart />
        </div>
      </CartProvider>
      <div className="flex justify-end max-w-7xl mx-auto flex-wrap mb-20">
        <select value={brand} onChange={handleBrandChange}>
          <option value="">Semua Product</option>
          {brands.map((item) => (
  <option value={item.brand}>{item.brand}</option>
))}
        </select>
      </div>
      <div className="flex justify-center max-w-7xl mx-auto flex-wrap mb-11">
        <CardProduct products={dataProduct.slice(0, visible)} />
      </div>
      <div className="flex flex-col items-center mb-11">
        {}

        {visible < dataProduct.length && ( // Hanya menampilkan tombol jika masih ada produk yang belum ditampilkan
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
