import React, { useState, useEffect } from "react";
import axios from "axios";
import Faq from "../components/Faq";
import CardArticle from "../components/CardArticle";
import apiUrl from "../utils/apiConfig";

const Article = () => {
  const [articleData, setArticleData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchDataArticle = async () => {
      const url = `${apiUrl}/article/getall`;
      try {
        const dataArticleFromServer = await axios.get(url);
        const result = dataArticleFromServer.data.data;
        setArticleData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchDataArticle();
  }, []);

  const displayedArticles = showAll ? articleData : articleData.slice(0, 5);

  return (
    <>
      <div className="bg-slate-900"></div>
      <Faq />
      {displayedArticles.map((article, index) => (
        <CardArticle key={index} data={article} />
      ))}
      <div className="my-5 w-full flex justify-center">
        {articleData.length > 5 && (
          <button
            className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Sembunyikan" : "Tampilkan Semua"}
          </button>
        )}
      </div>
    </>
  );
};

export default Article;
