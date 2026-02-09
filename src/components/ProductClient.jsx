"use client";

import { addProduct } from "@/app/reduxtoolkit/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";


const ProductClient = ({ product }) => {
  const dispatch = useDispatch();
  const [title,setTitle] = useState("")
  

  const handleAddToCart = () => {
    setTitle(product.title)
    console.log(title)
    dispatch(addProduct(product));
  };

  return (
    <div className="my-10">
      <h2 className="text-xl font-bold mb-4">Details Page {product.id}</h2>

      <div className="card bg-base-100 w-96 shadow-sm mx-auto">
        <figure className="p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 object-contain"
          />
        </figure>

        <div className="card-body ">
          <h2 className="card-title">{product.title}</h2>

          <p className="text-lg font-semibold">${product.price}</p>

          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              className="btn text-white rounded px-3 py-1 hover:bg-green-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductClient;
