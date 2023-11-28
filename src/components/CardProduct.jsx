import "../css/index.css";

const CardProduct = () => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4">
        <img
          className="w-full"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Sunset"
        />
        <div>
          <p className="text-center font-bold text-xl mb-2 mt-5">
            Bodypack Paris 2.0 Lite
          </p>
          <p className="text-gray-700 text-base text-center">IDR 399,000.00</p>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
