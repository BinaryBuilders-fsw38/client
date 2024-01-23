import React, { useState } from "react";
import SearchComponent from "./SearchComponent.jsx";
import Dropdown from "./DropdownComponent.jsx";
import DateSelector from "./Date.jsx";
import Footer from "./Footer.jsx";
import MiniNavbar from "./MiniNavbar.jsx";
import CardOrder from "./CardOrder.jsx";
import CardOrderTrack from "./CardOrderTrack.jsx";

const Order = () => {
  const [formData, setFormData] = useState({
    product: "",
    date: "",
    status: "",
    price: "",
    quantity: "",
  });

  // untuk handle submit data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Pemesanan:", formData);
    // value dapat di kirim ke server atau tampilkan pesan
  };

  const handleProductSelect = (selectedProduct) => {
    // Lakukan sesuatu dengan produk yang dipilih
    console.log(selectedProduct);
  };

  const handleDateChange = (selectedDate) => {
    // tanggal yang dipilih kirim ke backend atau perbarui data lokal
    console.log("Selected Date:", selectedDate);
  };

  return (
    <div>
      <div className=" ml-60 text-2xl">
        <h1 className="pt-10 sm:-ml-20">Data Transaksi</h1>
      </div>
      <div className="max-w-5xl py-3 rounded-md bg-white border border-slate-300 max-h-full mx-auto">
        <div className="max-w-full flex gap-3 items-center">
          <SearchComponent />
          <Dropdown onSelect={handleProductSelect} />
          <DateSelector onDateChange={handleDateChange} />
        </div>
        <div className="max-w-full flex gap-3 items-center ml-16 my-4">
          <h1 className="font-bold text-sm">Status</h1>
          <button className="border-2 bg-teal-300 rounded-lg font-semibold  px-2 py-1 text-sm">
            Semua
          </button>
          <button className="border-2 rounded-lg font-semibold px-2 py-1 text-sm">
            Berlangsung
          </button>
          <button className="border-2 rounded-lg font-semibold px-2 py-1 text-sm">
            Berhasil
          </button>
          <button className="border-2 rounded-lg font-semibold px-2 py-1 text-sm">
            Tidak berhasil
          </button>
        </div>
        <CardOrder />
        <CardOrderTrack />
      </div>
    </div>
  );
};

export default Order;
