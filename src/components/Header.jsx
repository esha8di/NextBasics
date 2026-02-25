"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';
import Banner from './Banner';
import NavLink from './NavLink';
import { useSelector } from 'react-redux';

const Header = () => {
    const pathname = usePathname();

    const myProducts = useSelector((data)=>data.myProductsData.myproducts)
    const myFavproducts = useSelector((data)=>data.myFavProductsData. myFavProducts)
    if(pathname.startsWith('/dashboard')) return <></>;
    return (
        <>
        <div className='h-[70px] flex justify-between p-2 pt-3  text-black bg-linear-60 from-green-300 to-green-500' >
         <Link href="/" className='font-bold text-2xl'>
              🎂 My Story
         </Link>

           <nav className='space-x-2'>
          <NavLink href="/story">story</NavLink>
          <NavLink href="/products">products</NavLink>
          <NavLink href="/register">register</NavLink>
          <NavLink href="/login">login</NavLink>
          <NavLink href="/users">users</NavLink>
          <NavLink href="/myproducts">myproducts <span>{myProducts.length}</span></NavLink>
          <NavLink href="/myfavproduct">myFavproducts <span>{myFavproducts.length}</span></NavLink>

           </nav>
        </div>
        <Banner></Banner>
        </>
        
    );
};

export default Header;