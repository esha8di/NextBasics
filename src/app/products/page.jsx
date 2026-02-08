import Card from '@/components/Card';
import FilterCategory from '@/components/FilterCategory';
import React from 'react';
import style from './products.module.css'
const Product = async({searchParams}) => {
    
    const data = await fetch("https://fakestoreapi.com/products",{
        next:{revalidate:10}
    });
    const products = await data.json();
    
   const searchText=await searchParams;
   console.log("search1",searchText);

    return (
        <div >
            <h2 className={`p-4 font-bold ${style.bgred} `}>Products</h2>
            <div>
                <FilterCategory></FilterCategory>
            </div>
            <div className='grid md:grid-cols-3 gap-10 p-4'>
                 {
                products.map(product => <Card key={product.id} product={product}></Card>)
            }
            </div>
           
            
        </div>
    );
};

export default Product;