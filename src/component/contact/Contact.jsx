import React from 'react';
import Get from '../../Get-in/Get';
import Info from '../../Get-in/Info';

const Contact = () => {
    return (
           <div className=' py-20 px-5 md:px-10 lg:px-20 bg-neutral-100 '>
            <div className='text-center'>
                    <p className='text-2xl md:text-6xl font-semibold text-black'>Contact Our <span className='text-[#00c3b9]'>Team</span></p>
                   <p className='text-neutral-800 mt-5 md:text-2xl'>We're here to help you start your wellness journey.</p>
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

export default Contact;