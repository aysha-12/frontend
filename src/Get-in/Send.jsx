import React from 'react';
import Get from './Get';

const Send = () => {
    return (
        <div className='py-20 md:py-30 px-5 md:px-25 bg-neutral-100 '>
            <div className='text-center'>
                    <p className='text-4xl md:text-6xl font-semibold text-[#00c3b9]'>Get in Touch</p>
                   <p className='text-neutral-800 mt-5'>We're here to help you start your wellness journey.</p>
                </div>
                <Get></Get>
        </div>
    );
};

export default Send;