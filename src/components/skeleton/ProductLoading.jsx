"use client";
import React from "react";

const ProductLoading = () => {
  return (
    <div className="h-full border border-white">
      <div className="overflow-hidden flex flex-col flex-grow animate-pulse">
        <figure className="flex justify-center items-center bg-gray-200 rounded-lg h-[200px]" />

        <div className="flex flex-col gap-3 text-left pt-4 flex-grow">
          <div className="flex justify-between items-start">
            <div className="space-y-2 w-[80%]">
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>

            <div className="h-4 bg-gray-200 rounded w-12"></div>
          </div>

          <div className="mt-auto">
            <div className="w-full h-10 rounded-lg bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLoading;
