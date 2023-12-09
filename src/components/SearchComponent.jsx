import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'

const SearchComponent = () => {
const [inputValue, setInputValue] = useState('')

const handleChange = (e) => {
    setInputValue(e.target.value)
}

return (
    
    <div className="flex items-center ml-16">
        <FiSearch className="text-gray-500 ml-2 absolute" />
    <input
        type="text"
        placeholder="Cari transaksi..."
        value={inputValue}
        onChange={handleChange}
        className="border-2 align-left border-gray-300 focus:outline-none focus:border-gray-500 rounded-md py-1 px-16"
    />
    </div>
)
}

export default SearchComponent;
