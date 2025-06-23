import React, { useEffect, useState } from 'react';
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom';


const Shop = () => {
   
    const[card,setcard]=useState([])
    
    
        useEffect(()=>{
            fetch("https://exam-backend-server.vercel.app/medicine")
            .then(res=>res.json())
            .then(data=>setcard(data))
        },[])
    return (
        <div className='mt-5 md:my-15 px-5 md:px-25'>
            <div className='text-center'>
                <p className='text-4xl md:text-6xl font-semibold text-black'>Our <span className='text-[#00c3b9]'>Products</span></p>
                <p className='text-neutral-800 mt-5 flex-wrap lg:px-50'>Optimize your results with expertly curated peptide combinations designed to enhance effectiveness and deliver maximum benefits.</p>
            </div>
             <div className='grid lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-2 gap-3 md:gap-10  py-15 overflow-hidden'>
                {
                 card.map((data,i)=><div className='bg-neutral-50 rounded-2xl shadow-2xl  px-2 py-2' key={i}>
                    <img className='h-38 md:h-58 md:w-62 w-full rounded-2xl' src={data.img} alt="" />
                   <div className='mt-5'>
                     <h1 className='md:text-xl font-semibold'>{data.name}</h1>
                    <div className='flex justify-between max-sm:text-[14px] md:text-0 mt-5'>
                        <p className='font-semibold md:text-xl'>{data.price}</p>
                        <p className='flex md:gap-2 items-center '><IoMdStar />{data.ratings} Ratings</p>
                    </div>
                   <div className='flex items-center justify-center py-2 md:py-5'>
                     <button className='btn bg-[#00c3b9] text-white rounded-4xl px-5 md:px-15 '><Link to='/buy'>{data.button}</Link></button>
                   </div>

                   </div>
                   </div>) 
                }
             </div>
            
        </div>
    );
};

export default Shop;