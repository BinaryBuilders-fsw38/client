    import "../css/index.css";
    import DateSelector from "./Date.jsx";

    const FormInputResi = ({onClose}) => {
        const handleDateChange = (selectedDate) => {
            // tanggal yang dipilih kirim ke backend atau perbarui data lokal
            console.log("Selected Date:", selectedDate);
        };
    return (
        <>
            <div className="bg-black fixed top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex flex-wrap w-1/2 bg-white px-3 py-3">
                <div className="register w-full px-2 text-left">
                <div className="flex justify-between gap-10">
                    <h1>input resi</h1>
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
                    />
                    </div>
                </div>
                <div className="tanggal-kirim">
                    <p className="mb-1">Tanggal Pengiriman</p>
                    <div className="py-2 mb-4">
                    <DateSelector onDateChange={handleDateChange}/>
                    </div>
                </div>

                <button className="bg-black text-white font-bold py-2 px-4 rounded mb-2">
                    Input Resi
                </button>
                </div>
            </div>
            </div>
        </>
    );
    };

    export default FormInputResi;
