import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";



// ContactPage.jsx


const Get = () => {
  
  return (
    <div  >
    
         {/* Contact Form Section */}
      <div >
        <section className='' >
        <div className='mt-10 px-5 md:px-10 bg-white py-10 md:py-14 shadow-2xl rounded-2xl'>
            <h2 className="md:text-3xl text-2xl font-semibold mb-6 ">Send Us a Message</h2>
        <form className="grid grid-cols-1 gap-6">
          <input type="text" placeholder="Full Name" className="p-4 md:text-2xl border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Email Address" className="p-4 border md:text-xl lg:text-2xl border-gray-300 rounded-lg" />
          <textarea rows="5" placeholder="Your Message" className="p-4 border md:text-xl lg:text-2xl border-gray-300 rounded-lg"></textarea>
          <button type="submit" className="bg-[#00c3b9] text-white md:text-xl lg:text-2xl py-3 px-6 rounded-lg hover:bg-[#00c3b9] transition">Send Message</button>
        </form>
        </div>
      </section>

      </div>
     

    </div>
  );
};




export default Get;