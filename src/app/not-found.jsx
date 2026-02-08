import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (
        <div>
           <p className='text-red-400'> Hello Esha Not Found page </p><br />
            <Link className='text-sm' href={'/'}>Back to Home</Link>
        </div>
    );
};

export default Notfound;