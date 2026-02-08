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
    if(pathname.startsWith('/dashboard')) return <></>;
    return (
        <>
        <div className='h-[70px] flex justify-between p-2 pt-3  text-black bg-linear-60 from-sky-300 to-sky-500' >
         <Link href="/" className='font-bold text-2xl'>
              🎂 My Story
         </Link>

           <nav className='space-x-2'>
          <NavLink href="/story">story</NavLink>
          <NavLink href="/products">products</NavLink>
          <NavLink href="/register">register</NavLink>
          <NavLink href="/login">login</NavLink>
          <NavLink href="/myproducts">Myproducts <span>{myProducts.length}</span></NavLink>
           </nav>
        </div>
        <Banner></Banner>
        </>
        
    );
};

export default Header;