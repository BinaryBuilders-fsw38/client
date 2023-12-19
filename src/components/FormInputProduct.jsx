import "../css/index.css";
import React, { useState } from "react";

const FormInputProduct = () => {
  const [image, setImage] = useState(null);
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <>
      <div className="flex mt-2 max-w-7xl mx-auto">
        <div className="m-auto w-full pl-10">
          <div className="flex flex-wrap -mx-2">
            <div className="register w-full md:w-1/2 px-2 text-left">
              <h1 className="text-3xl font-bold mb-10">Input Data Product</h1>
              <div className="dataDiri">
                <p className="mb-1">Product Name</p>
                <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                  <input
                    type="text"
                    className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <div className="dataDiri">
                <p className="mb-1">Brand</p>
                <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                  <input
                    type="text"
                    className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <div className="dataDiri">
                <p className="mb-1">Price</p>
                <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                  <input
                    type="number"
                    min="0"
                    step={1000}
                    className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <div className="dataDiri">
                <p className="mb-1">Stock</p>
                <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                  <input
                    type="number"
                    min="0"
                    className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="dataDiri ">
                <p className="mb-2">Category</p>
                <div className="border-b-2 border-gray-200 py-2 mb-4 relative focus-within:border-black hover:border-black">
                  <select className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
                    <option value=""></option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
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
                <p className="mb-2">Type</p>
                <div className="border-b-2 border-gray-200 py-2 mb-4 relative focus-within:border-black hover:border-black">
                  <select className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
                    <option value=""></option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
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
                <p className="mb-1">Description Product</p>
                <div className="border-b-2 border-gray-200 py-2 mb-4 focus-within:border-black hover:border-black">
                  <input
                    type="text"
                    className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="dataDiri mb-16">
                <p className="mb-1">Upload Image Product</p>
                <label className="flex flex-col items-center px-10 py-6 tracking-wide bg-gray-200 border border-blue cursor-pointer">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <label className="filetype cursor-pointer">
                        Pilih Gambar
                        <input
                          type="file"
                          onChange={onImageChange}
                          className="hidden"
                          accept="image/*"
                        />
                      </label>
                    </div>
                    <div>
                      <img alt="" src={image} className="w-20" />
                    </div>
                  </div>
                </label>
                <p className="mb-1 text-sm">
                  *jpg/jpeg/png/gif file maksimal 2MB
                </p>
              </div>
              <button className="bg-black text-white font-bold py-2 px-4 rounded mb-2">
                Input Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormInputProduct;
