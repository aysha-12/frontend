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
        <div >
           
             <div className='grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-2 gap-3 md:gap-10  py-15 overflow-hidden'>
                {
                 card.map((data,i)=><div className='bg-neutral-50 rounded-2xl shadow-2xl  px-2 py-2' key={i}>
                    <img className='h-38 md:h-58 md:w-80 lg:w-96 w-full rounded-2xl' src={data.img} alt="" />
                   <div className='mt-5'>
                     <h1 className='md:text-xl lg:text-2xl font-semibold'>{data.name}</h1>
                    <div className='flex justify-between max-sm:text-[14px] lg:text-xl md:text-0 mt-5'>
                        <p className='font-semibold md:text-xl'>{data.price}</p>
                        <p className='flex md:gap-2 items-center '><IoMdStar />{data.ratings} Ratings</p>
                    </div>
                   <div className='flex items-center justify-center py-2 md:py-5'>
                     <button className='btn bg-[#00c3b9] text-white rounded-4xl py-3 px-5 md:px-10 md:text-xl '><Link to='/buy'>{data.button}</Link></button>
                   </div>

                   </div>
                   </div>) 
                }
             </div>
            
        </div>
    );
};

export default Shop;