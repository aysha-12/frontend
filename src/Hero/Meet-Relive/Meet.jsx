import React from 'react';
import img from '../../assets/image 1.png'

const Meet = () => {
    return (
        <div className='mt-5 md:mt-30 block md:flex gap-0 md:gap-10 items-center px-5 md:px-25'>
            <div className=''>
               <img className='h-[250px] md:h-[400px] w-[1500px]' src={img} height={1000} width={1000} alt="relive" />
            </div>
            <div className='mt-7 md:mt-0'>
             
                    
                    <h1 className='text-2xl md:text-6xl font-semibold text-black'>Meet <span className='text-[#00c3b9]'>Relive </span></h1>
                    <p className='text-neutral-800 mt-6 '>Relive is a premium anti-aging clinic offering advanced, science-based therapies to support longevity and overall wellness. We blend cutting-edge medical technology with personalized care to help you feel your best at any age.</p>
                   <button className="btn bg-[#00c3b9] p-6 mt-6 text-white rounded-full text-[16px] ">Learn More</button>
                     
                </div> 
             

            </div>
            
      
    );
};

export default Meet;