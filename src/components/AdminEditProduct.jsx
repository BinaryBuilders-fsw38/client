import "../css/index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../utils/apiConfig";

const EditModal = ({ data, onClose }) => {
  const [editedProductInfo, setEditedProductInfo] = useState({
    product_name: "",
    description: "",
    brand: "",
    price: "",
    stock: "",
    category_id: "",
    type_id: "",
    product_file: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (data) {
      setEditedProductInfo({
        product_name: data.product_name,
        description: data.description,
        brand: data.brand,
        price: data.price,
        stock: data.stock,
        category_id: data.category_id,
        type_id: data.type_id,

        product_file: null,
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    setEditedProductInfo({
      ...editedProductInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setEditedProductInfo({
      ...editedProductInfo,
      product_file: e.target.files[0],
    });
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_name", editedProductInfo.product_name);
    formData.append("description", editedProductInfo.description);
    formData.append("brand", editedProductInfo.brand);
    formData.append("price", editedProductInfo.price);
    formData.append("stock", editedProductInfo.stock);
    formData.append("category_id", editedProductInfo.category_id);
    formData.append("type_id", editedProductInfo.type_id);
    formData.append("product_file", editedProductInfo.product_file);

    try {
      const response = await axios.put(
        `${apiUrl}/product/update/${data.product_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setIsSubmitted(true);
      setResponseMessage(response.data.message);
      // Close the modal or handle success as needed
      onClose();
      alert("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
      setIsSubmitted(true);
      setResponseMessage("Error updating product. Please try again.");
      alert("Error updating product. Please try again.");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-4 rounded relative  overflow-y-auto max-h-screen w-full mt-32">
        <button
          onClick={onClose}
          className="absolute right-0 top-0 m-2 text-gray-800 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <form onSubmit={handleEdit}>
          <div className="space-y-12 mx-auto w-full max-w-7xl max-sm:px-6 max-md:px-8 max-lg:px-10 max-xl:px-12">
            <div className="border-b border-gray-900/10 pb-12 mt-20">
              <div className="flex flex-wrap -mx-2">
                <div className="register w-full md:w-1/2 px-2 text-left">
                  <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-10">
                    Edit Data Product
                  </h1>

                  <div className="dataDiri">
                    <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                      Product Name
                    </p>
                    <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                      <input
                        type="text"
                        className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        placeholder=""
                        required
                        name="product_name"
                        value={editedProductInfo.product_name}
                        editedProductInfo
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="dataDiri">
                    <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                      Brand
                    </p>
                    <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                      <input
                        type="text"
                        className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        placeholder=""
                        required
                        name="brand"
                        value={editedProductInfo.brand}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="dataDiri">
                    <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                      Price
                    </p>
                    <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                      <input
                        type="number"
                        min="0"
                        step={1000}
                        className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        placeholder=""
                        required
                        name="price"
                        value={editedProductInfo.price}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="dataDiri">
                    <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                      Stock
                    </p>
                    <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                      <input
                        type="number"
                        min="0"
                        className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        placeholder=""
                        name="stock"
                        value={editedProductInfo.stock}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="dataDiri ">
                    <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                      Category
                    </p>
                    <div className="border-b-2 border-gray-200 py-2 mb-4 relative focus-within:border-black hover:border-black">
                      <select
                        value={editedProductInfo.category_id}
                        onChange={handleInputChange}
                        name="category_id"
                        className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      >
                        <option value=""></option>
                        <option value="1">SkinCare</option>
                        <option value="2">Shampoo</option>
                        <option value="3">Sun Screen</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12l-6-6h12l-6 6z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="dataDiri ">
                    <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                      Type
                    </p>
                    <div className="border-b-2 border-gray-200 py-2 mb-4 relative focus-within:border-black hover:border-black">
                      <select
                        name="type_id"
                        value={editedProductInfo.type_id}
                        onChange={handleInputChange}
                        className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      >
                        <option value=""></option>
                        <option value="1">Kulit Berminyak</option>
                        <option value="2">Kulit Normal</option>
                        <option value="3">Kulit Kering</option>
                        <option value="3">Kulit Kombinasi</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12l-6-6h12l-6 6z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="dataDiri mb-16">
                    <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                      Description Product
                    </p>
                    <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                      <input
                        type="text"
                        className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        placeholder=""
                        required
                        name="description"
                        value={editedProductInfo.description}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="dataDiri mb-16">
                    <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                      Upload Image Product
                    </p>
                    <label className="flex flex-col items-center px-10 py-6 tracking-wide bg-gray-200 border border-blue cursor-pointer">
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <label className="filetype cursor-pointer">
                            Pilih Gambar
                            <input
                              type="file"
                              name="product_file"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                        </div>
                        <div>
                          {editedProductInfo.product_file && (
                            <img
                              alt=""
                              className="w-20"
                              src={URL.createObjectURL(
                                editedProductInfo.product_file
                              )}
                            />
                          )}
                        </div>
                      </div>
                    </label>
                    <p className="mb-1 text-sm">
                      *jpg/jpeg/png/gif file maksimal 2MB
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white font-bold py-2 px-4 rounded mb-2"
                  >
                    Input Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
