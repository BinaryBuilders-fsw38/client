import "../css/index.css";
import React from "react";
import { FiMoreHorizontal, FiMoreVertical } from "react-icons/fi";

const CardArticle = ({data}) => {
    return(
        <>
        <div className="pointer-event-auto mt-20 p-3 bg-white rounded-xl shadow-md ml-16 border-4">
            <div className="flex  justify-between items-center">
        <h1 className="mb-5 font-bold text-4xl">{data.title}</h1>
        <FiMoreVertical className="text-2xl font-bold" />
            </div>
        <div dangerouslySetInnerHTML={{ __html: data.contain }} />
        </div>
        </>
    )
}
export default CardArticle