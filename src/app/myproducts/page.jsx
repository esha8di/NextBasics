'use client'

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../reduxtoolkit/slice';


const Myprofile = () => {
    const myProducts = useSelector((data)=>data.myProductsData.myproducts);
    const dispatch = useDispatch();
    return (
        <div>
            myproducts
            {
                myProducts.map((product)=><li key={product.id}>{product.title} <button onClick={()=>dispatch(removeProduct(product.id))}>❌</button></li>)
            }
        </div>
    );
};

export default Myprofile;