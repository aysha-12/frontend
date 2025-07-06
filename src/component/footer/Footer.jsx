import React from 'react';
import img from '../../assets/Group 1321321162.png'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';





const Footer = () => {
    return (
        <div className='bg-[#001716] py-10 md:py-15  rounded-t-4xl'>
           <div className='py-10 px-5 md:px-15 lg:px-20 block lg:flex  md:gap-20 '>
            <div>
                <img src={img} alt="" />
                <p className='text-neutral-400 mt-5 lg:text-xl' >Cutting-edge anti-aging solutions <br></br>designed for a healthier, more vibrant you.</p>
                <div className='text-neutral-200 text-2xl  flex gap-3 mt-5'>
                    <FaFacebook />
                    <FaYoutube />
                    <FaLinkedin />
                    <MdMessage />
                
                </div>
            </div>
            <div>
                <p className='text-2xl lg:text-3xl text-neutral-200 mt-5 lg:mt-0'>Company</p>
              <div className='block mt-3 lg:text-xl'>
                  <a href='/' className=' text-neutral-400'>About us</a><br></br>
                 <a href='/' className=' text-neutral-400'>Contact</a><br></br>
                 <a href='/' className=' text-neutral-400'>Jobs</a><br></br>
                 <a href='/' className=' text-neutral-400'>Press kit</a><br></br>
              </div>
            </div>
            <div>
                 <p className='text-2xl lg:text-3xl text-neutral-200  mt-5 lg:mt-0'>Legal</p>
              <div className='block mt-3 lg:text-xl'>
                  <a href='/' className=' text-neutral-400'>Terms of use</a><br></br>
                 <a href='/' className=' text-neutral-400'>Privacy policy</a><br></br>
                 <a href='/' className=' text-neutral-400'>Cookie policy</a><br></br>
                 
              </div>

            </div>
             <div>
                 <p className='text-2xl lg:text-3xl text-neutral-200  mt-5 lg:mt-0'>Newsletter</p>
              <div className='block mt-3 lg:text-xl'>
                  <p className=' text-neutral-400 '>Subscribe to our newsletter for the
                   latest updates and offers.</p>
                  <div className="join mt-5">
  <div>
    <label className="input validator join-item">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" placeholder="mail@site.com" required />
    </label>
    <div className="validator-hint hidden lg:text-xl">Enter valid email address</div>
  </div>
  <button className="btn bg-[#00c3b9] lg:text-xl  join-item">Subscribe  </button>
</div>
              </div>

            </div>
          </div>

          <hr className='text-[#00c3b9] border-1 py-0'></hr>
         
          <p className='text-center lg:text-xl text-neutral-400 mt-5'>© 2025 Relive Anti-Aging Clinic. All rights reserved.</p>
        </div>
    );
};

export default Footer;