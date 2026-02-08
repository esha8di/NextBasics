'use client'
import NavLink from '@/components/NavLink';
import Link from 'next/link';
import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='grid grid-cols-[20%_80%] px-5 py-10 text-left'>
            <div>
                  <Link href="/" className='font-bold text-2xl'>
                               🎂 My Story
                          </Link>
            <nav className='text-sm flex flex-col space-y-1 mt-5 border-r-2 min-h-screen'>
                {/* <NavLink href={"/dashboard"}>Dashboad</NavLink> */}
                <NavLink href={"/dashboard/myprofile"}>My Profile</NavLink>
                <NavLink href={"/dashboard/settings"}>Settings</NavLink>
            </nav>
            </div>
           

            <div className=' text-center p-10'>
            {
                children
            }
            </div>
            
            
        </div>
    );
};

export default Layout;