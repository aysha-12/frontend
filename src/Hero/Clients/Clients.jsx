import React from 'react'
import pic from '../../assets/Ellipse 1017.png'
import pic1 from '../../assets/Ellipse 1018.png'
import pic2 from '../../assets/Ellipse 1019.png'
import icon from '../../assets/Vector.png'

const Clients = () => {
    return (
       <div className=' px-5 md:px-25 md:pt-30 pt-10 '>
         <div className='bg-linear-to-r from-[#09514d] to-[#09514d]    rounded-4xl'>
            <div className=' px-5 md:px-25 py-15 mt-5 md:mt-0' >
                <div >
                
               <div className='text-center'>
                    <p className='text-2xl md:text-6xl font-semibold text-white'>What Our <span className='text-[#00c3b9]'> Clients</span> say</p>
                   <p className='text-neutral-200 mt-5'>Explore our wide range of innovative anti-aging solutions.</p>
                </div>

            </div>
            <div className=' mt-10 block md:flex  gap-5 '>
                <div className='  bg-neutral-100 rounded-2xl  px-3 md:px-10 py-4 md:py-8'>
                    <div className='flex items-center gap-3'>
                        <img src={pic} alt="" />
                        <div>
                            <p>Sarah Johnson</p>
                            <p>Age: 45</p>
                        </div>
                    </div>
                    <div className='flex   mt-3 gap-2'>
                        <img className='h-3' src={icon} alt="" />
                        <p>After just three months with Relive's peptide therapy, I've turned back the clock by a decade. My energy levels are through the roof!</p>
                    </div>

                </div>
                 <div className='  bg-neutral-100 rounded-2xl mt-5 md:mt-0 px-3 md:px-10 py-4 md:py-8'>
                    <div className='flex items-center gap-3'>
                        <img src={pic1} alt="" />
                        <div>
                            <p>Michael Thomas</p>
                            <p>Age: 42</p>
                        </div>
                    </div>
                    <div className='flex   mt-3 gap-2'>
                        <img className='h-3' src={icon} alt="" />
                        <p>The hormone replacement therapy at Relive has completely transformed my quality of life.I sleep better,think clearer.</p>
                    </div>

                </div>
                 <div className='  bg-neutral-100 rounded-2xl mt-5 md:mt-0 px-3 md:px-10 py-4 md:py-8'>
                    <div className='flex items-center gap-3'>
                        <img src={pic2} alt="" />
                        <div>
                            <p>Faraday Henry</p>
                            <p>Age: 48</p>
                        </div>
                    </div>
                    <div className='flex  mt-3 gap-2'>
                        <img className='h-3' src={icon} alt="" />
                        <p>The hormone replacement therapy at Relive has completely transformed my quality of life. I sleep better, think clearer.</p>
                    </div>

                </div>
                
            </div>
            </div>
            
        </div>
       </div>
    );
};

export default Clients;