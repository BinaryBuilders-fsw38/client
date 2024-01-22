import "../css/index.css";
import React, { useState, useEffect } from "react";
import { Editor } from "primereact/editor";
import { useNavigate } from "react-router-dom";
import {
  FiEdit,
  FiMoreHorizontal,
  FiMoreVertical,
  FiPenTool,
  FiTrash,
} from "react-icons/fi";
import axios from "axios";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const AddArticle = ({ data }) => {
  const [articleData, setArticleData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [title, setTitle] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const [articleIdToDelete, setArticleIdToDelete] = useState(null);
  const [articleId, setArticleId] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const adminId = location.state && location.state.adminId;
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEditorChange = (e) => {
    setEditorValue(e.htmlValue);
  };

  const handleSendData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/article/add/${adminId}`,
        {
          title: title,
          contain: editorValue,
        }
      );
      console.log(response.data.status);
      if (response.data.status === "success") {
        navigate("/article");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchDataArticle = async () => {
      const url = "http://localhost:3000/article/getall";
      try {
        const dataArticleFromServer = await axios.get(url);
        const result = dataArticleFromServer.data.data;
        setArticleData(result); //Uhuy
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchDataArticle();
  }, [articleIdToDelete]);

  const handleDelete = (id) => {
    const articleId = id;

    const deleteArticle = async () => {
      const url = `http://localhost:3000/article/delete/${articleId}`;
      try {
        await axios.delete(url);
        const newData = articleData.filter((article) => article.id !== id);
        setArticleData(newData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setArticleIdToDelete(id);
    };
    deleteArticle();
  };
  const cobaRef = useRef(null);
  const handleUpdate = async (id) => {
    const inputId = id;
    console.log("input id ==>", inputId);
    cobaRef.current?.scrollIntoView({ behavior: "smooth" });

    try {
      const response = await axios.get(
        `http://localhost:3000/article/get/${inputId}`
      );
      console.log(response);
      setTitle(response.data.data[0].title);
      setEditorValue(response.data.data[0].contain);
      setArticleId(response.data.data[0].article_id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleUpdateData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/article/update/${articleId}`,
        {
          title: title,
          contain: editorValue,
        }
      );
      if (response.data.status === "success") {
        const title = response.data.data.title;
        const content = response.data.data.contain;
        navigate("/article");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const displayedArticles = showAll ? articleData : articleData.slice(0, 5);

  return (
    <>
      <form ref={cobaRef}>
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
                      value={title}
                      onChange={handleTitleChange}
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
                      value={editorValue}
                      name="contain"
                      onTextChange={handleEditorChange}
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
              onClick={(e) => handleSendData(e)}
              className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  mb-10"
            >
              Save
            </button>
            <button
              type="submit"
              onClick={(e) => handleUpdateData(e)}
              className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  mb-10"
            >
              Update
            </button>
          </div>
        </div>
      </form>

      <div>
        <h1 className=" text-center text-3xl">Article Dashboard</h1>
        {displayedArticles.map((article) => (
          <div
            className="pointer-event-auto mt-20 p-3 bg-white rounded-xl shadow-md ml-16 border-4"
            key={article.article_id}
          >
            <div className="flex justify-between items-center">
              <h1 className="mb-5 font-bold text-4xl">{article.title}</h1>
              <div className="flex gap-2">
                <button onClick={() => handleDelete(article.article_id)}>
                  <FiTrash className="text-2xl font-bold" />
                </button>
                <button
                  value={article.contain}
                  onClick={() => handleUpdate(article.article_id)}
                >
                  <FiEdit className="text-2xl font-bold" />
                </button>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: article.contain }} />
          </div>
        ))}
      </div>
      <div className="my-5 w-full flex justify-center">
        {articleData.length > 5 && (
          <button
            className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Hide" : "Show All"}
          </button>
        )}
      </div>
    </>
  );
};

export default AddArticle;
