import React, {  useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../auth-context/UserContext';







const Sign = () => {

  const authInfo=useContext(authContext) 



 
  const handleSubmit = (e) => {
    e.preventDefault();
    const data=e.target
    const name=data.name.value
    const email=data.email.value
    const password=data.password.value
    console.log(name,email,password);  
    

    authInfo.createuaer( email, password)
    .then(result=>{
      const user=result.user;      
          
      if(user?.uid){
        alert("okkk")
      }
      
    })
    .catch(error=>{
      console.log(error);
      
    })    
    
  };


  const click=()=>{
      authInfo.google()
      
    }

     
 
    return (
      <div className=' px-5 md:px-25 md:py-0 py-10 bg-gray-100'>      
      
            <div className="flex items-center justify-center min-h-screen ">
      <form action=""
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

        <div className="mb-5">
          <label className="block text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            name="password"
           
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required 
          />
        </div>
        <div className="mb-3">
          <Link to="/login" className='font-thin'>Already have an account?Login now</Link>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#00c3b9] text-white py-2 rounded-lg hover:bg-green-900
          transition"
        >Create Account
          {/* <Link to='/shop'> 
          Create Account</Link> */}
        </button>
        <button 
          type="submit"
          className="w-full bg-[#00c3b9] text-white py-2 mt-5 rounded-lg hover:bg-green-900
          transition"
          onClick={click}
        >
         {/* <Link to='/shop'> Create account with Google </Link> */}
         Create account with Google
        </button>
      </form>
    </div>
      </div>
    );
};

export default Sign;