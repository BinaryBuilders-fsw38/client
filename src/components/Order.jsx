import React, { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent.jsx";
import Dropdown from "./DropdownComponent.jsx";
import DateSelector from "./Date.jsx";
import CardOrder from "./CardOrder.jsx";
import CardOrderTrack from "./CardOrderTrack.jsx";
import apiUrl from "../utils/apiConfig.js";
import axios from "axios";
import { useAuth } from "../utils/useAuth.jsx";
import { useNavigate } from "react-router-dom";

const Order = () => {
    const navigate = useNavigate();
    const { isLogin } = useAuth();
    const [dataOrder, setDataOrder] = useState([]);
    const [selectedDateOrder, setSelectedDateOrder] = useState();
    const [flag, setFlag] = useState(false);
    const [activeStatus, setActiveStatus] = useState('all');
    const [filteredOrder, setFilteredOrder] = useState();
    const [tempState, setTempState] = useState([]);
    const [formData, setFormData] = useState({
        product: "",
        date: "",
        status: "",
        price: "",
        quantity: "",
    });

    useEffect(() => {
        if (!isLogin) {
            // Jika belum login, redirect ke halaman login
            navigate("/login");
            return null; // Pastikan untuk mengembalikan null atau tampilan pesan login di sini
        } else {
            const fetchData = async () => {
                const userInfo = localStorage.getItem("userInfo");
                const userInfoObject = JSON.parse(userInfo);
                const user_id = userInfoObject.user_id;
                if (!user_id) {
                    return <div>Anda belum login</div>
                } else {
                    // const userID = 1
                    try {
                        const response = await axios.get(`${apiUrl}/checkout/getByUser/${user_id}`);
                        const result = response.data.data;
                        if (result.length === 0) {
                            console.log(result);
                            setDataOrder([]);
                        } else {
                            console.log(result);
                            setDataOrder(result);
                        }

                    } catch (error) {
                        console.log(error);
                        throw error;
                    }
                }

            }
            fetchData();
        }
    }, [])
    // Periksa apakah pengguna telah login


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

    const handleDateChange = (tanggal) => {
        // tanggal yang dipilih kirim ke backend atau perbarui data lokal
        if (tanggal != null) {
            const filteredData = dataOrder.filter((item) => {
                const orderDate = new Date(item.created_at)
                if (!isNaN(orderDate.getTime())) {
                    return orderDate.toISOString().split('T')[0] === tanggal.toISOString().split("T")[0];
                }
                return false;
            });
            setFlag(true);
            setSelectedDateOrder(filteredData);
            console.log("filtered data:", filteredData);
            console.log("Selected Date:", tanggal);
        } else {
            setFlag(false);
        }

    };

    const handleActiveStatus = (status) => {
        setActiveStatus(status);
    }

    const handlePaidStatus = (status) => {
        if (!dataOrder || !Array.isArray(dataOrder)) {
            // Handle the case when dataOrder is not defined or not an array
            console.error('Data order is undefined or not an array');
            return;
        }
        // let filteredData = dataOrder;
        // console.log("filtered data now ==> ",filteredData)
        if (flag) {
            setTempState(selectedDateOrder);
            console.log('current value of date order == > ', selectedDateOrder)
            let filteredSelectedDateOrder;
            if (status.toLowerCase() === "paid" || status.toLowerCase() === "unpaid") {
                console.log(`masuk ke ${status.toLowerCase()}`);
                filteredSelectedDateOrder = Array.isArray(tempState) ? tempState.filter((item) => item.payment_status.toLowerCase() === status.toLowerCase()) : [];
            }

            setSelectedDateOrder(filteredSelectedDateOrder !== undefined ? filteredSelectedDateOrder : []);
            console.log("if flag is true ==> ", selectedDateOrder);
        } else {
            if (status.toLowerCase() === 'paid') {
                setFilteredOrder(dataOrder.filter((item) => item.payment_status.toLowerCase() === status.toLowerCase()));
            } else if (status.toLowerCase() === 'unpaid') {
                setFilteredOrder(dataOrder.filter((item) => item.payment_status.toLowerCase() === status.toLowerCase()))
            } else {
                setFilteredOrder(dataOrder);
            }
        }

        // console.log("filtered orders ==>", filteredData);
        console.log(flag)
    }


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
                    <button
                        className={`border-2 ${activeStatus === 'all' ? 'bg-teal-300' : 'bg-white'} rounded-lg font-semibold  px-2 py-1 text-sm`}
                        onClick={() => {
                            setDataOrder(dataOrder);
                            setFlag(false);
                            handleActiveStatus('all');
                            handlePaidStatus('all');
                        }}
                    >
                        Semua
                    </button>
                    <button className={`border-2 ${activeStatus === 'Paid' ? 'bg-teal-300' : 'bg-white'} rounded-lg font-semibold px-2 py-1 text-sm`}
                        onClick={() => {
                            handleActiveStatus('Paid');
                            handlePaidStatus('Paid');
                        }}
                    >
                        Paid
                    </button>
                    <button className={`border-2 ${activeStatus === 'Unpaid' ? 'bg-teal-300' : 'bg-white'} rounded-lg font-semibold px-2 py-1 text-sm`}
                        onClick={() => {
                            handleActiveStatus('Unpaid');
                            handlePaidStatus('Unpaid');
                        }}
                    >
                        Unpaid
                    </button>
                </div>
                {dataOrder.length === 0 ? (<div className="text-center font-bold">You don't have any checkouts yet</div>) : (
                    <>
                        <CardOrder dataOrder={flag ? selectedDateOrder : (filteredOrder || dataOrder)} />
                        <CardOrderTrack />
                    </>

                )}
            </div>
        </div>
    );
};

export default Order;
