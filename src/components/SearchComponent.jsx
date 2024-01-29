import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'

const SearchComponent = () => {
const [inputValue, setInputValue] = useState('')

const handleChange = (e) => {
    setInputValue(e.target.value)
}

return (
    
    <div className="flex items-center xl:ml-16 lg:ml-16 md:ml-16 sm:ml-10">
        <FiSearch className="text-gray-500 ml-2 absolute" />
    <input
        type="text"
        placeholder="Cari transaksi..."
        value={inputValue}
        onChange={handleChange}
        className="border-2 align-left border-gray-300 focus:outline-none focus:border-gray-500 rounded-md py-1 px-12  w-full"
    />
    </div>
)
}

export default SearchComponent;
