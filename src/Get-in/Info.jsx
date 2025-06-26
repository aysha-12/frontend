import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Info = () => {
    return (
        <div>
                  <section>
                    <div className='mt-10 px-5 md:px-10 bg-white py-10 md:py-15 rounded-2xl'>
                          <h2 className="md:text-3xl text-2xl font-semibold mb-6 ">Contact Information</h2>
                          <div className='flex gap-3  mt-5'>
                              <IoLocationOutline className='mt-2 text-xl text-[#00c3b9]' /> 
                            <div>
                                <p className=" text-xl font-semibold md:text-2xl  ">Our Location</p>
                                <p className='md:text-xl'>123 Wellness Avenue, Suite 200<br></br>Dubai, UAE</p>
                            </div>
                          </div>
                           <div className='flex gap-3  mt-5 '>
                            <FaPhoneAlt className='mt-2 text-xl text-[#00c3b9]' />
                            <div>
                                
            
                                <p className=" text-xl font-semibold md:text-2xl ">Phone</p>
                                <p className='md:text-xl'>(555) 123-4567</p>
                            </div>
                          </div>
                           <div className='flex gap-3  mt-5'>
                            <MdOutlineMailOutline className='mt-2 text-xl text-[#00c3b9]'  />
            
                            <div>
                                <p className=" text-xl font-semibold md:text-2xl ">Email</p>
                                <p className='md:text-xl'>info@relive-clinic.com</p>
                            </div>
                          </div>
                          <div>
                              <p className=" text-xl font-semibold mt-6 mb-3  md:text-2xl">Business Hours</p>
                            <p className='mb-3 md:text-xl'>Monday - Friday: 9:00 AM - 7:00 PM</p>
                            <p className='mb-3 md:text-xl'>Saturday: 10:00 AM - 4:00 PM</p>
                            <p className='mb-3 md:text-xl'>Sunday: Closed</p>
                          </div>
            
            
            
                      </div>
                  </section>
        </div>
    );
};

export default Info;