"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deletefav} from "../reduxtoolkit/favProductSlice"

const MyFavproducts = () => {
    const favProducts = useSelector((data)=>data.myFavProductsData. myFavProducts)
    const dispatch = useDispatch()
    return (
        <div>
            {
                favProducts.map((product)=><li key={product.id}>{product.title}<span onClick={()=>dispatch(deletefav(product))}>❌</span></li>)
            }
        </div>
    );
};

export default MyFavproducts;