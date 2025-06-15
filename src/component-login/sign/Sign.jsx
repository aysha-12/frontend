import React, {  useState } from 'react';

import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';





//  const auth = getAuth(app);

const Sign = () => {

//  const[value,setValue]=useState({})
//  console.log(value);  

  const handleSubmit = () => {
    // e.preventDefault();
    // const data=e.target
    // const name=data.name.value
    // const email=data.email.value
    // const password=data.password.value
    // console.log(name,email,password);  

  };
     
 
    return (
      <div className=' px-5 md:px-25 md:py-0 py-10 bg-gray-100'>
            <div className="flex items-center justify-center min-h-screen ">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            name="name"
           
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            name="email"
           
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required 
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            name="password"
           
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required 
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-[#00c3b9] text-white py-2 rounded-lg hover:bg-green-900
          transition"
        ><Link to='/shop'> 
          Create Account</Link>
        </button>
        <button 
          type="submit"
          className="w-full bg-[#00c3b9] text-white py-2 mt-5 rounded-lg hover:bg-green-900
          transition"
        >
         <Link to='/shop'> Create account with Google </Link>
        </button>
      </form>
    </div>
      </div>
    );
};

export default Sign;