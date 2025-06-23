import React from 'react';
import img from '../../assets/portrait-of-beautiful-albino-girl-isolated-on-dark-2024-10-17-04-31-33-utc 1.png'

const Slider = () => {
    return (
       
            <div className="hero min-h-screen bg-center  bg-cover"  style={{
                
    backgroundImage:`url(${img})`,
  }}>
                <div className='flex justify-start  px-5 md:px-25'>
                    <div className='w-full md:w-1/2 '>
                    <h1 className='text-6xl md:text-8xl text-white'>Rediscover Youth, <span className='text-[#00c3b9]'> Redefine Life.</span></h1>
                    <p className='text-neutral-200  mt-5'>Embrace a renewed sense of vitality and confidence with advanced anti-aging therapies. At Relive, we help you unlock the best version of yourself inside and out.</p>
                  <div className='my-5'> <button className="btn bg-[#00c3b9]  p-6  text-white rounded-full text-[16px] ">Contact Us</button></div>
                     
                </div> 
             
                </div>

            </div>
        
    );
};

export default Slider;