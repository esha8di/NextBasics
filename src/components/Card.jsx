"use client";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavProducts,togglefav } from "@/app/reduxtoolkit/favProductSlice";
const Cards = ({ product }) => {
  const dispatch =useDispatch()
  const favProducts = useSelector(data=>data.myFavProductsData.myFavProducts);

  const isFav = favProducts.find(p=>p.id==product.id);
  
  return (
    <div className="border border-white">
      <div className="transition-all group duration-300 ease-out  overflow-hidden flex flex-col flex-grow">
        <figure className="flex justify-center items-center text-white bg-gray-50 rounded-lg overflow-hidden">
          <img
            className="h-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
            src={product?.image}
          />
        </figure>

        <div className="flex flex-col gap-3 text-left pt-4 flex-grow">
          <div className="flex justify-between items-start">
            <h2 className="font-semibold text-sm line-clamp-2 w-[80%]">
              {product.title}
            </h2>
            <p className="font-bold text-indigo-600">
              {product.price}
              <span className="text-sm">TK</span>
              <button onClick={()=>dispatch(togglefav(product))} className="cursor-pointer p-1 ">{
                isFav? "❤️":"🤍"}</button>
            </p>
          </div>

          <div className="mt-auto">
            <Link href={`/products/${product.id}`}>
                <button
             className="w-full btn py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Product Details
            </button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
