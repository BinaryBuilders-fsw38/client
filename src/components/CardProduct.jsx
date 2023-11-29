import "../css/index.css";

const CardProduct = () => {
  return (
    <>
      <div className="max-w-xs rounded overflow-hidden  px-2 py-2 mb-4 mx-2 ">
    <a href="#"><img
      className="w-full"
      src="https://thumbor.sirclocdn.com/unsafe/500x500/filters:format(webp)/magento.bodypack.co.id/media/catalog/product/cache/9923e576b779a380a568c8c3f82e7a7d/b/o/bodypack_credo_cross_body_cre-2_1024.jpg"
      alt="Product"
    /></a>
    <div>
    <a href="#" className="MuiTypography-root " id="plugin-productTitle-typography">Bodypack Credo Pouch - Cream</a>
    <div className="mt-7">
      <p className="MuiTypography-root jss935 jss943 jss949 jss954 jss929 jss945 jss1267 price_text MuiTypography-caption MuiTypography-alignLeft">IDR <b> 349,000.00 </b></p>
    </div>
    </div>
  </div>
    </>
  );
};

export default CardProduct;
