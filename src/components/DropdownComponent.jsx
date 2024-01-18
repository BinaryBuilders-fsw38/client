import React, { useState } from 'react'

const Dropdown = ({ onSelect }) => {
const [selectedProduct, setSelectedProduct] = useState('')
const products = ['Skincare', 'Haircare', 'Body care']

const handleSelect = (product) => {
    setSelectedProduct(product)
    onSelect(product)
}

return (
    <div className="relative inline-block " >
    <select
        value={selectedProduct}
        onChange={(e) => handleSelect(e.target.value)}
        className="border-2 border-gray-300 py-1 px-20 bg-white rounded-md focus:outline-none focus:border-gray-500  w-full">
        <option value="" disabled hidden>
        Semua Produk
        </option>
        {products.map((product) => (
        <option key={product} value={product}>
            {product}
        </option>
        ))}
    </select>
    </div>
)
}

export default Dropdown
