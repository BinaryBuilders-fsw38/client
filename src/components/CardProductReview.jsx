import React from "react"
import { RxDotFilled } from "react-icons/rx";
import FotoProduct from "../images/haircare.jpg"
import ProductRate from "./ProductReviewRate"
import CardUserReview from "./UserReviewCard"
import { FaStar } from "react-icons/fa6";
const CardProduct = function () {
    const rating = 4.5;
    const totalReviews = 200;
    const percentage = [20, 40, 15, 10, 25]; 
    return (
        <>
        <div className="mt-16 ">
            <h1 className="pt-10 pl-20 text-4xl">PRODUCT REVIEW</h1>
            <div className="flex gap-5 mt-20 mx-20">
                <div className="w-90">
                <img className="mx-2 my-2 rounded-md" src={FotoProduct} alt="product" />
                </div>
                <div className="w-full ml-16">
                    <h1 className="font-bold text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,</h1>
                    <div className="flex  gap-3 items-center">
                    <h4 className="font-bold">Terjual <span className="text-gray-600">100+</span></h4>
                    <RxDotFilled className="mt-2"/>
                    <FaStar className="text-yellow-400"/>
                    <h2 className="font-bold">4.7 <span className="text-gray-600">(91 rating)</span></h2>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-3xl">280.000</h1>
                        <h2 className="bg-red-200 w-8 text-sm font-black text-red-600 rounded-sm px-1 flex gap-2">20% <span className="text-gray-600 line-through">Rp35.000</span></h2>
                        <div className="flex gap-16 mt-10  border-y border-gray-300">
                            <a href="#"><h1 className="text-xl font-semibold px-2 py-2 ml-10 hover:border-b-4 hover:border-yellow-300">Detail</h1></a>
                            <a href="#"><h1 className="text-xl font-semibold px-2 py-2 ml-10 hover:border-b-4 hover:border-yellow-300">Spesifikasi</h1></a>
                            <a href="#"><h1 className="text-xl font-semibold px-2 py-2 ml-10 hover:border-b-4 hover:border-yellow-300 ">Info Penting</h1></a>
                        </div>
                        <div className=" mb-5 mt-5 text-sm">
                            <h2 className="font-semibold text-gray-400">kondisi: <span className="text-black">Baru</span></h2>
                            <h2 className="font-semibold text-gray-400 mt-2">Min. Pemesanan <span className="text-black"> 1 Buah</span></h2>
                            <p className="font-semibold text-sm mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veritatis possimus, voluptatibus impedit at consequatur incidunt minus consectetur, ab autem iure error saepe natus soluta vero esse repellendus explicabo alias quis. Vel natus eos doloribus aspernatur excepturi voluptatum, ipsum neque sapiente asperiores praesentium dicta velit laboriosam esse nisi sint ea id illum quod recusandae! Aliquid quod sed excepturi ducimus adipisci. Est, deleniti totam aspernatur suscipit mollitia placeat facere magni ullam. Quod similique ut provident iusto necessitatibus veritatis nesciunt.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex ml-20">
                <ProductRate rating={rating} percentage={percentage} totalReviews={totalReviews}/>
                <CardUserReview/>
            </div>
        </div>
        </>
    )
}

export default CardProduct