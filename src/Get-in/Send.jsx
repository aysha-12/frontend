import React from 'react';
import Get from './Get';
import Info from './Info';

const Send = () => {
    return (
        <div className='py-20 md:py-30 lg:px-20 px-5 md:px-10 bg-neutral-100 '>
            <div className='text-center'>
                    <p className='text-4xl md:text-6xl font-semibold text-[#00c3b9]'>Get in Touch</p>
                   <p className='text-neutral-800 md:text-2xl mt-5'>We're here to help you start your wellness journey.</p>
                </div>
               <div className='block lg:flex justify-between gap-10 '>
                 <div className='w-full'>
                    <Get></Get>
                 </div>
               <div className='w-full'>
                 
                <Info></Info>
               </div>
               </div>
        </div>
    );
};

export default Send;