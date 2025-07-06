import React from 'react';
import Shop from '../Shop';
import madi from '../../../assets/madi.png'
import Cards from '../Bundels/Cards';

const Product = () => {
    return (
        <div className='mt-5 md:mt-25 px-5 md:px-10 lg:px-20'>
             <div className='text-center'>
                <p className='text-4xl md:text-6xl font-semibold text-black'>Our <span className='text-[#00c3b9]'>Products</span></p>
                <p className='text-neutral-800 mt-5 flex-wrap md:text-2xl lg:px-50'>Optimize your results with expertly curated peptide combinations designed to enhance effectiveness and deliver maximum benefits.</p>
            </div>

            <div>
                <Shop></Shop>
            </div>
            <div className='mt-5 md:mt-20 block md:flex gap-0 lg:gap-20 items-center px-5 md:px-10 lg:px-20'>
                <div>
                    <img className='h-[250px] md:h-[400px] w-[1700px]' src={madi} height={1000} width={1000} alt="relive"  />
                </div>
                <div className=''>
                <p className='text-4xl md:text-6xl font-semibold text-black'>Advanced  <span className='text-[#00c3b9]'>Anti-Aging Products</span></p>
                <p className='text-neutral-800 mt-5 flex-wrap md:text-2xl '>Experience the future of wellness with our premium, science-driven products—formulated to rejuvenate your skin, revitalize your energy levels, and support your body from the inside out. Each solution is crafted with clinically proven ingredients to help you look younger, feel stronger, and live better every day.</p>
            </div>               
            </div>
            <div className='mb-20 '>
                 <Cards></Cards>
            </div>
            
        </div>
    );
};

export default Product;