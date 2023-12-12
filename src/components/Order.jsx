import React, { useState } from 'react'
import SearchComponent from './SearchComponent.jsx'
import Dropdown from './DropdownComponent.jsx'
import DateSelector from './Date.jsx'
import { FiMoreHorizontal } from "react-icons/fi"
import FotoProduct from '../images/skincare.jpg'
import Footer from './footer.jsx'
import MiniNavbar from './miniNavbar.jsx'

const Order = () => {
const [formData, setFormData] = useState({
    product: '',
    date: '',
    status: '',
    price: '',
    quantity: '',
})

// untuk handle submit data
const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
    ...formData,
    [name]: value,
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Pemesanan:', formData);
    // value dapat di kirim ke server atau tampilkan pesan
}

    const handleProductSelect = (selectedProduct) => {
    // Lakukan sesuatu dengan produk yang dipilih
    console.log(selectedProduct);
    };

    const handleDateChange = (selectedDate) => {
    // tanggal yang dipilih kirim ke backend atau perbarui data lokal
    console.log('Selected Date:', selectedDate);
    }

return (
    <div>
        <div className=" ml-60 text-2xl">
        <h1 className='pt-10'>Data Transaksi</h1>
        </div>
    <div className="max-w-5xl py-3 rounded-md bg-white border border-slate-300 max-h-full mx-auto">
        <div className="max-w-full flex gap-3 items-center">
        <SearchComponent/>
        <Dropdown onSelect={handleProductSelect}/>
        <DateSelector onDateChange={handleDateChange}/>
        </div>
        <div className="max-w-full flex gap-3 items-center ml-16 my-4">
        <h1 className='font-bold text-sm'>Status</h1>
        <button className='border-2 bg-teal-300 rounded-lg font-semibold  px-2 py-1 text-sm'>Semua</button>
        <button className='border-2 rounded-lg font-semibold px-2 py-1 text-sm'>Berlangsung</button>
        <button className='border-2 rounded-lg font-semibold px-2 py-1 text-sm'>Berhasil</button>
        <button className='border-2 rounded-lg font-semibold px-2 py-1 text-sm'>Tidak berhasil</button>
        </div>
    <div className=" rounded-md mt-2 max-w-4xl mx-auto p-6 bg-white shadow-lg border mb-4">
    <div className="-mt-5 ">
    <div className="w-auto flex gap-2">
        {/* <h2 className="text-2xl font-semibold mb-4">Order Form</h2> */}
        <h1 className='font-bold text-sm '>Belanja</h1>
        <h4 className='font-bold text-sm text-gray-500'>1 Des 2023</h4>
        <h4 className='font-bold text-sm text-gray-500  bg-teal-300 h-5 rounded-md px-2'>Berhasil</h4>
        <h4 className='font-bold text-sm text-slate-500'>IVR/20230101/XXIII/XII/1298378</h4>
        <form onSubmit={handleSubmit}>
        </form>
    </div>
    <h1 className='font-bold mt-2'>Hrny official store</h1>
    <div className="w-full flex mt-1 justify-between">
        <div className="w-20 ml-4 flex gap-3">
            <img src={FotoProduct} alt="" />
            <div className='w-auto'>
            <h1 className="w-80 text-md ">Parfum anti bacterial</h1>
            <h3 className='text-sm font-semibold text-slate-500'>1 barang x 150.000</h3>
            <h3 className='text-sm font-semibold text-slate-500 mt-3'>+2 product lainnya</h3>
            </div>
        </div>
        <div className=" mr-20 p-6 border-zinc-200  border-l">
        <h2 className="text-sm font-semibold text-gray-600">Total Harga</h2>
        {/* Tampilkan ringkasan pesanan, misalnya: */}
        {/* <p>Produk: {formData.product}</p> */}
        <h1 className='font-bold text-zinc-90 text-lg'> Rp.300.000 {formData.quantity}</h1>
        </div>
    </div>
    </div>
    <div className="max-w-full flex justify-end gap-3 items-center mt-10">
            <a href=""><h4 className='text-sm font-bold text-teal-400'>Lihat Detail Transaksi</h4></a>
            <div className="button flex gap-4 ">
            <button className='border-2 border-teal-300 text-sm px-16 font-semibold text-teal-300 py-1 rounded-md'>Ulas</button>
            <button className='border-2 border-none bg-teal-300 text-sm px-16 py-1 font-semibold text-white rounded-md'>Beli lagi</button>
            </div>
        <button className='ml-5 border px-1 py-1 rounded-md border-gray-300'><FiMoreHorizontal className='text-2xl font-bold'/></button>
    </div>
    </div>
    </div>
    <Footer/>
    <MiniNavbar/>
    </div>
)
}

export default Order;
