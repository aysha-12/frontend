import React from 'react';
import Get from '../../Get-in/Get';

const Contact = () => {
    return (
           <div className=' py-20 px-5 md:px-25 bg-neutral-100 '>
            <div className='text-center'>
                    <p className='text-2xl md:text-6xl font-semibold text-black'>Contact Our <span className='text-[#00c3b9]'>Team</span></p>
                   <p className='text-neutral-800 mt-5'>We're here to help you start your wellness journey.</p>
                </div>
                <Get></Get>
        </div>
    );
};

export default Contact;