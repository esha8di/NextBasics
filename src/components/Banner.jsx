"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router = useRouter();
    console.log(router)
    const handledashboard = () =>{
        const password = prompt("Enter passoword")
        if(password== "123"){
            router.push("/dashboard")
        }
    }
    return (
        <div className='p-3 text-center space-y-2'>
            <h2 className='text-2xl font-bold'>
                Welcome to my Story
            </h2>
            <button onClick={handledashboard} className='btn bg-black p-1 rounded text-shadow-white text-white'>Go to DashBoard</button>
            

        </div>
    );
};

export default Banner;