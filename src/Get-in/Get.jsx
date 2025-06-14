import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";



// ContactPage.jsx


const Get = () => {
  
  return (
    <div  >
    
         {/* Contact Form Section */}
      <div className='block lg:flex gap-20 '>
        <section className='w-full lg:w-1/2' >
        <div className='mt-10 px-5 md:px-10 bg-white py-10 md:py-15 rounded-2xl'>
            <h2 className="md:text-3xl text-2xl font-semibold mb-6 ">Send Us a Message</h2>
        <form className="grid grid-cols-1 gap-6">
          <input type="text" placeholder="Full Name" className="p-4 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Email Address" className="p-4 border border-gray-300 rounded-lg" />
          <textarea rows="5" placeholder="Your Message" className="p-4 border border-gray-300 rounded-lg"></textarea>
          <button type="submit" className="bg-[#00c3b9] text-white py-3 px-6 rounded-lg hover:bg-[#00c3b9] transition">Send Message</button>
        </form>
        </div>
      </section>

       <div>
           <section className='lg:w-[530px]' >
        <div className='mt-10 px-5 md:px-15 bg-white py-10 md:py-15 rounded-2xl'>
              <h2 className="md:text-3xl text-2xl font-semibold mb-6 ">Contact Information</h2>
              <div className='flex gap-3  mt-5'>
                  <IoLocationOutline className='mt-2 text-xl text-[#00c3b9]' /> 
                <div>
                    <p className=" text-xl font-semibold  ">Our Location</p>
                    <p>123 Wellness Avenue, Suite 200<br></br>Dubai, UAE</p>
                </div>
              </div>
               <div className='flex gap-3  mt-5 '>
                <FaPhoneAlt className='mt-2 text-xl text-[#00c3b9]' />
                <div>
                    

                    <p className=" text-xl font-semibold  ">Phone</p>
                    <p>(555) 123-4567</p>
                </div>
              </div>
               <div className='flex gap-3  mt-5'>
                <MdOutlineMailOutline className='mt-2 text-xl text-[#00c3b9]'  />

                <div>
                    <p className=" text-xl font-semibold  ">Email</p>
                    <p>info@relive-clinic.com</p>
                </div>
              </div>
              <div>
                  <p className=" text-xl font-semibold mt-6 mb-3 ">Business Hours</p>
                <p className='mb-3'>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p className='mb-3'>Saturday: 10:00 AM - 4:00 PM</p>
                <p className='mb-3'>Sunday: Closed</p>
              </div>



          </div>
      </section>
      </div>

      </div>
     

    </div>
  );
};




export default Get;