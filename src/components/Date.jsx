import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { MdOutlineDateRange } from "react-icons/md"


const DateSelector = ({ selectedDate, onDateChange }) => {
const [startDate, setStartDate] = useState(selectedDate)

useEffect(()=>{
    setStartDate(selectedDate);
},[selectedDate])

const handleDateChange = (date) => {
    setStartDate(date)
    onDateChange(date)
}

const resetDate = ()=>{
    setStartDate(null)
    onDateChange(null)
}

return (
    <>
    <div className="flex items-center">
    <MdOutlineDateRange className='absolute z-10 ml-2 text-gray-500'/>
    <DatePicker
    selected={startDate}
    onChange={handleDateChange}
    dateFormat="dd/MM/yyyy"
    className="border-2 border-gray-300 focus:outline-none focus:border-gray-500 rounded-md py-1 px-12  w-full "
    placeholderText="   Pilih Tanggal"
    />
    <button onClick={resetDate} className="ml-0 bg-teal-300 h-9 rounded-md px-2">
        Reset
    </button>
    </div>
    </>
)
}

export default DateSelector
