import Link from 'next/link';
import React from 'react';

const Story = () => {
    return (
        <div className='flex justify-between p-3'>
            this is my story.
            <nav className='space-x-1 text-sm'>
                <Link href={"/story/about"}>About</Link>
                <Link href={"/story/contact"}>Contact</Link>
            </nav>
        </div>
    );
};

export default Story;