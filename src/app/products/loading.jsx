import ProductLoading from '@/components/skeleton/ProductLoading';
import React from 'react';

const Loading = () => {
    return (
        <div>
           <div className='grid md:grid-cols-3 gap-10 p-12'>
                            {

                                [...Array(12)].map((data,index)=>
                                <ProductLoading key={index} data={data}></ProductLoading>)
}
                       </div>
        </div>
    );
};

export default Loading;