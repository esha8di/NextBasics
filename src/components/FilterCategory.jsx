'use client'

import React from 'react';

const FilterCategory = () => {

   
    

    const handleSearch = (e) =>{
        e.preventDefault();
        const data = e.target.search.value;
        console.log(data)
        


    }
    return (
        <form onSubmit={handleSearch} className='flex gap-1 justify-center items-center'>
            <input
            name="search"
            
            className='text-sm border border-black rounded p-2'
             type="text"  id="" placeholder='All Categories'/>
             <button className='bg-blue-700 p-1 btn cursor-pointer text-black rounded'>Search</button>
        </form>
    );
};

export default FilterCategory;