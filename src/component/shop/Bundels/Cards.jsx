import React from 'react';

const Cards = () => {
    return (
        <div>
            <div className='px-5 md:px-10 lg:px-20 md:pt-30 pt-10 '>
                   <div className='bg-[#09514D] rounded-2xl  px-10 md:px-15 py-15 md:py-15 mt-5 md:mt-0 '>                    
                      <div className='text-center'>
                          
                             <p className='text-3xl md:text-6xl font-semibold text-white text-center '>Ready to Begin Your Transformation?</p>
                          <p className='text-base-100 md:text-2xl mt-8  '>Connect with our experts today and take the first step toward<br></br> a healthier, more youthful you.</p>
                           <button className="btn bg-[#00c3b9] p-7 mt-10  text-black font-semibold rounded-full text-[16px] md:text-2xl ">Contact us</button>
                          
                      </div>
                   </div>

                </div>
        </div>
    );
};

export default Cards;