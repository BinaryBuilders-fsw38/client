import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../utils/apiConfig";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import EditModal from "./AdminEditProduct";
import FormInputProduct from "./FormInputProduct";

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${apiUrl}/product/get`);
      setData(result.data.data);
    };

    fetchData();
  }, []);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleEdit = (data) => {
    setSelectedData(data);
    setModalEditOpen(true);
  };

  const handleAdd = () => {
    setModalAddOpen(true);
  };
  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
        try {
          await axios.delete(`${apiUrl}/product/delete/${id}`);
          // Setelah produk berhasil dihapus, ambil data produk lagi
          const result = await axios(`${apiUrl}/product/get`);
          setData(result.data.data);
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      }
  };
  const handleFormClose = () => {
    setModalAddOpen(false);
    setModalEditOpen(false);
  };
  const handleDataUpdate = async () => {
    // Ambil data produk yang diperbarui setelah review baru dikirimkan
    const result = await axios(`${apiUrl}/product/get`);
    setData(result.data.data);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderItems = currentItems.map((item, index) => {
    return (
      <tr key={index} className="border-b border-gray-200">
        <td className="px-4 py-2">{indexOfFirstItem + index+1}</td>
        <td className="px-4 py-2">{item.product_name}</td>
        <td className="px-4 py-2">{item.price}</td>
        <td className="px-4 py-2">
          <img
            src={item.product_file}
            className="w-20 h-20"
            alt={item.product_name}
          />
        </td>
        <td className="px-4 py-2">{item.brand}</td>
        <td className="px-2 py-2">
          <button
            onClick={() => handleEdit(item)}
            className="mr-2 text-blue-500 hover:text-blue-700"
          >
            <FaEdit />
          </button>
          <button onClick={() => handleDelete(item.product_id)} className="text-red-500 hover:text-red-700">
            <FaTrash />
          </button>
        </td>
      </tr>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={handleClick}
        className={`mx-1 px-3 py-2 bg-white rounded-lg ${
          currentPage === number
            ? "text-blue-600 border-blue-600 border"
            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
        }`}
      >
        {number}
      </li>
    );
  });

  return (
    <>
      <div className="space-y-12 mx-auto w-full max-w-7xl max-sm:px-6 max-md:px-8 max-lg:px-10 max-xl:px-12">
        <div className=" mt-20">
        <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold ">
              Data Product
            </h1>
        </div>
        <div className="self-end mb-4 mr-12">
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-slate-900 text-white rounded flex items-center"
          >
            <FaPlus className="mr-2" /> Tambah
          </button>
        </div>
        <table className="w-full text-left">
          <th>No</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Photo</th>
          <th>Brand</th>
          <th>Action</th>
          <tbody>{renderItems}</tbody>
        </table>
        <ul className="flex mt-4 space-x-2">{renderPageNumbers}</ul>
        {modalEditOpen && <EditModal 
          onClose={handleFormClose}
          data={selectedData}
          onDataUpdate={handleDataUpdate}
        />}
        
        {modalAddOpen && <FormInputProduct onClose={handleFormClose} onDataUpdate={handleDataUpdate}/>}
      </div>
    </>
  );
};

export default DataTable;
