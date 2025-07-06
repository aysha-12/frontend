import React, { useEffect, useState } from 'react';

import image from '../../assets/Group 1321321173.png'
import Cards from '../shop/Bundels/Cards';

const About = () => {

    const [team,setTeam]=useState([])
    useEffect(()=>{
        fetch("https://exam-backend-server.vercel.app/team")
        .then(res=>res.json())
        .then(data=>setTeam(data))
    },[])
    return (
        <div className='my-25 mt-5 md:mt-25 px-5 md:px-10 lg:px-20'>
             <div className=' block lg:flex gap-0 md:gap-10 items-center px-5 md:px-25'>
                 <div className='w-full lg:w-1/2'>
                  <img className='h-[250px] md:h-[400px] w-[1500px]' src={image} height={1000} width={1000} alt="relive" />
               </div>
                <div className='mt-10 lg:mt-0 px-5  w-full lg:w-1/2'>
                    <h1 className='text-4xl md:text-6xl font-semibold text-black'>About  <span className='text-[#00c3b9]'>Us </span></h1>
                    <p className='text-neutral-800 mt-6 '>
                        Where innovation meets wellness.At Relive, we are dedicated to redefining the way you age. Our clinic combines advanced medical science with personalized care to deliver powerful anti-aging solutions that work from the inside out.We specialize in:</p>
                   
                       <p> * Peptide Therapy to stimulate collagen and cellular repair</p>
                       <p> * Hormone Replacement to restore balance and vitality</p>
                        <p>* Skin Rejuvenation to enhance your natural glow</p>
                    
                      <p>Our team of experienced specialists designs customized treatment plans tailored to your unique needs and wellness goals. Whether you're here to feel more energetic, look younger, or boost your confidence, we’re here to guide your transformation With Relive, you don’t just slow aging—you take control of it.</p>

                

                </div>                             
            </div>

            <div>
               <div className='text-center  mt-30 '>
                  <p className='text-4xl md:text-6xl font-semibold text-black'>Our Team</p>
                 <p className='text-neutral-800 mt-5 flex-wrap md:text-2xl lg:px-30'>Our multidisciplinary team includes licensed medical doctors, clinical researchers, and wellness consultants who specialize in peptide science, endocrinology, and preventative medicine. Each member of the Relive team shares a common goal: to help patients live longer, stronger, and with greater vitality.</p>
               </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 md:gap-10 mt-20  overflow-hidden'>
                    {
                        team.map((data,i)=><div className="card bg-neutral-100  shadow-sm" key={i}>
                                  <figure>
                                      <img className='h-70 md:h-58  lg:w-96  w-full rounded-2xl'
                                        src={data.img}
                                        alt="Shoes" />
                                  </figure>
                          <div className="card-body">
                              <h2 className="card-title">{data.name}</h2>
                                <p>{data.task}</p>

                            </div>
                      </div>)
                    }                    
                </div> 
            </div>
            
            <div>
                <Cards></Cards>
            </div>
            
        </div>
    );
};

export default About;