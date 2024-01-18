import "../css/index.css";
import React, { useState } from "react";
import { Editor } from "primereact/editor";
import axios from "axios";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [contain, setText] = useState("");

  const handleArticle = (e) => {
    e.preventDefault();
    const inputArticle = {
      title,
      contain,
    };
    console.log(inputArticle);
    addArticle(inputArticle);
  };
  const admin_id = 2;
  const addArticle = async function (inputArticle) {
    try {
      const addArticleFromServer = await axios({
        method: "POST",
        url: `http://localhost:3000/article/add/${admin_id}`,
        data: inputArticle,
      });
      console.log(addArticleFromServer);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div className="space-y-12 mx-auto w-full max-w-7xl max-sm:px-6 max-md:px-8 max-lg:px-10 max-xl:px-12">
        <div className="border-b border-gray-900/10 pb-12 mt-20">
          <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">
            Add Article
          </h1>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                  Tittle
                </p>
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                      
                    }}
                    autoComplete="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                <p className="mb-1 text-sm sm:text-base md:text-md lg:text-lg xl:text-lg">
                  Content
                </p>
              </label>
              <div className="mt-2">
                <div className="card">
                  <Editor
                    value={contain}
                    name= "contain"
                    onTextChange={(e) => setText(e.htmlValue)}
                    style={{ height: "320px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            onClick={(e) => handleArticle(e)}
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  mb-10"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddArticle;
