import "../css/index.css";

const CardArticle = ({data}) => {
    return(
        <>
        <div className="pointer-event-auto mt-20 p-3 bg-white rounded-xl shadow-md ml-16">
        <h1 className="mb-16 font-bold text-4xl">{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.contain }} />
        </div>

        </>
    )
}
export default CardArticle