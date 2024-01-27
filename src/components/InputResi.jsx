    import axios from "axios";
    import "../css/index.css";
    import DateSelector from "./Date.jsx";
    import React, { useState} from 'react';
    import apiUrl from "../utils/apiConfig";
    import { useNavigate } from "react-router-dom";

    const FormInputResi = ({selectedData, onClose}) => {
        const [shipmentStatus, setShipmentStstus] = useState("");
        const [trackingNumber, setTrackingNumber] = useState("");
        const [date, setDate] = useState("")
        const Navigate = useNavigate()



        const handleDateChange = (selectedDate) => {
            setDate(selectedDate)
        };

        const handleShipmentChange = (e) =>{
            setShipmentStstus(e.target.value);
            if(e.target.value === "belum-kirim"){
                setShipmentStstus("Belum Dikirim");
            }else if(e.target.value === "kirim"){
                setShipmentStstus("Dikirim");
            }
        }

        const userId = selectedData.userId
        const checkoutId = selectedData.checkoutId
        const handleInputResi = () => {
            const inputData = {
                user_id: userId,
                checkout_id: checkoutId,
                shipment_status: shipmentStatus,
                tracking_number: trackingNumber,
                updated_at: date,

            }
            inputResi(inputData)
            onClose()
        }

        const inputResi = async (inputData) => {
            try {
                const resiFromServer = await axios({
                    method: "PATCH",
                    url: `${apiUrl}/admin/order/update`,
                    data: inputData
                })
                if (resiFromServer.data.status === "success") {
                    Navigate(0)
                }
            } catch (error) {
                console.log(error);
            }
        }

        
    return (
        <>
            <div className="bg-black fixed top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex flex-wrap w-1/2 bg-white px-3 py-3">
                <div className="register w-full px-2 text-left">
                <div className="flex justify-between gap-10">
                    <h1>Input Resi</h1>
                    <button onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
                </button>
                </div>

                <div className="nomor-order">
                    <p className="mb-1">Nomor Order</p>
                    <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                    <input
                        type="text"
                        className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        onChange={(e) => {setTrackingNumber(e.target.value)}}
                    />
                    </div>
                </div>


                <div className="w-1/2 pr-2">
                    <select
                      id="metodePengiriman"
                      className="w-full p-2 border rounded"
                      value={shipmentStatus}
                      onChange={handleShipmentChange}
                    >
                      <option value="" disabled hidden>
                        Update Shipment Status
                      </option>
                      <option value="belum-kirim">Belum Dikirim</option>
                      <option value="dikirim">Dikirim</option>
                    </select>
                  </div>
            

                <div className="tanggal-kirim">
                    <p className="mb-1">Tanggal Pengiriman</p>
                    <div className="py-2 mb-4">
                    <DateSelector onDateChange={handleDateChange}/>
                    </div>
                </div>

                <button className="bg-black text-white font-bold py-2 px-4 rounded mb-2"
                onClick={handleInputResi}
                >
                    Input Resi
                </button>
                </div>
            </div>
            </div>
        </>
    );
    };

    export default FormInputResi;
