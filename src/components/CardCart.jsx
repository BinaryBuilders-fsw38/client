import "../css/index.css";

const CardCart = (params) => {
  return (
    <div className="my-4 px-4">
      <div className=" relative float-left w-20">
        <a href="/">
          <img
            src="https://thumbor.sirclocdn.com/unsafe/75x92/filters:format(webp)/magento.bodypack.co.id/media/catalog/product/cache/9923e576b779a380a568c8c3f82e7a7d/b/o/bodypack_paris_2.0_high_laptop_backpack_blk-1_1024.jpg"
            alt=""
          />
        </a>
      </div>
      <a href="/" className=" font-extrabold">
        Bodypack Paris 2.0 High Laptop Backpack - Black
      </a>

      <div className="flex justify-between">
        <div className="flex">
          <p>QTY</p>
          <button>
            <p>
              <i className="fa-solid fa-less-than mx-2"></i>
            </p>
          </button>
          <p> 1 </p>
          <button>
            <p>
              <i className="fa-solid fa-greater-than ml-2"></i>
            </p>
          </button>
        </div>
        <div>
          <p className="font-extrabold">IDR 149,000.00</p>
        </div>
      </div>
      <button className="float-right">
        <i className="fa-solid fa-x"></i>
      </button>
      <hr className="flex w-11/12 mx-auto mt-3" />
    </div>
  );
};

export default CardCart;
