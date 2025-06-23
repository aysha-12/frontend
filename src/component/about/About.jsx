import React from 'react';
import Meet from '../../Hero/Meet-Relive/Meet';
import Treatments from '../../Hero/Treatments/Treatments';
import Clients from '../../Hero/Clients/Clients';
import image from '../../assets/Group 1321321173.png'

const About = () => {
    return (
        <div className='my-25'>
             <div className=' block md:flex gap-0 md:gap-10 items-center px-5 md:px-25'>
                 <div className='w-full md:w-1/2'>
                  <img className='h-[250px] md:h-[400px] w-[1500px]' src={image} height={1000} width={1000} alt="relive" />
               </div>
                <div className='mt-7 md:mt-0 px-5  w-full md:w-1/2'>
                    <h1 className='text-4xl md:text-6xl font-semibold text-black'>About  <span className='text-[#00c3b9]'>Us </span></h1>
                    <p className='text-neutral-800 mt-6 '>
                        Where innovation meets wellness.At Relive, we are dedicated to redefining the way you age. Our clinic combines advanced medical science with personalized care to deliver powerful anti-aging solutions that work from the inside out.We specialize in:</p>
                   
                       <p> * Peptide Therapy to stimulate collagen and cellular repair</p>
                       <p> * Hormone Replacement to restore balance and vitality</p>
                        <p>* Skin Rejuvenation to enhance your natural glow</p>
                    
                      <p>Our team of experienced specialists designs customized treatment plans tailored to your unique needs and wellness goals. Whether you're here to feel more energetic, look younger, or boost your confidence, we’re here to guide your transformation With Relive, you don’t just slow aging—you take control of it.</p>

                

                </div>               
            </div>
            <div className='mt-8'><Meet></Meet></div>
            <div><Treatments></Treatments></div>
            <div><Clients></Clients></div>
           
            
        </div>
    );
};

export default About;