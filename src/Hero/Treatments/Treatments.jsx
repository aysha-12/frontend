import React from 'react';
import img from '../../assets/Frame.png'
import img1 from '../../assets/Frame (1).png'
import img2 from '../../assets/Frame (2).png'
import { FaArrowRightLong } from "react-icons/fa6";


const Treatments = () => {
    return (
        <div className='mt-5 md:mt-25 px-5 md:px-10 lg:px-20'>
            <div className='text-center'>
                <p className='text-4xl md:text-6xl font-semibold text-black'>Our <span className='text-[#00c3b9]'>Specialized Treatments</span></p>
                <p className='text-neutral-800 mt-5 md:text-2xl'>Explore our wide range of innovative anti-aging solutions.</p>
            </div>
            <div className='block lg:flex gap-5 mt-10   '> 
                <div className='bg-neutral-200 rounded-2xl lg:py-5 mt-5  w-full md:w-96 lg:w-full'>
                   <div className='py-5 px-5'>
                     <img src={img} alt="image" />
                    <div>
                        <p className='mt-5 font-semibold text-xl md:text-2xl lg:text-3xl'>Peptide Therapy</p>
                        <p className='text-[13px] md:text-xl lg:text-2xl'>Boost cellular regeneration and vitality.</p>
                        <button className='text-[13px] md:text-xl  flex items-center gap-1 text-[#00c3b9] font-semibold mt-2'>Learn More <FaArrowRightLong /></button>
                    </div>
                   </div>
                </div>
                <div className='bg-neutral-200 rounded-2xl lg:py-5 mt-5 w-full md:w-96 lg:w-full' >
                    <div className='py-5 px-5'>
                     <img src={img1} alt="image" />
                    <div>
                        <p className='mt-5 font-semibold text-xl md:text-2xl lg:text-3xl'>Hormone Replacement</p>
                        <p className=' text-[13px] md:text-xl lg:text-2xl'>Restore balance, energy, and well-being.</p>
                        <button className='text-[13px] md:text-xl  flex items-center gap-1 text-[#00c3b9] font-semibold mt-2'>Learn More <FaArrowRightLong /></button>
                    </div>
                   </div>
                </div>
                <div className='bg-neutral-200 rounded-2xl lg:py-5 mt-5 w-full md:w-96 lg:w-full'>
                    <div className='py-5 px-5'>
                     <img src={img2} alt="image" />
                    <div>
                        <p className='mt-5 font-semibold text-xl md:text-2xl lg:text-3xl'>Skin Rejuvenation</p>
                        <p className='text-[13px] md:text-xl lg:text-2xl '>Advanced treatments for youthful skin.</p>
                        <button className='flex text-[13px] md:text-xl items-center gap-1 text-[#00c3b9] font-semibold mt-2'>Learn More <FaArrowRightLong /></button>
                    </div>
                   </div>
                </div>
            </div>
            
        </div>
    );
};

export default Treatments;