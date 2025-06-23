import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../auth-context/UserContext';





 


const Login = () => {

    const authInfo=useContext(authContext)

  const[value,setValue]=useState({})
   console.log(value);  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const data=e.target
      
      const email=data.email.value
      const password=data.password.value
      console.log(email,password);  
      
  
       authInfo.login( email, password)
      .then(result=>{
        const user=result.user;
        setValue(user)        
      })
      .catch(error=>{
        console.log(error);        
      })
  
      
    };

    const click=()=>{
      authInfo.google()
      
    }

    return (
        <div>
            <div>
          <h1>{value.email}</h1>
          <p>{value.password}</p>
        </div>

            <div className=' px-5 md:px-25 md:py-0 py-10 bg-gray-100'>
            <div className="flex items-center justify-center min-h-screen ">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

       

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
          <Link to="/sign" className='font-thin'>create account</Link>
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
        >Create account with Google
         {/* <Link to='/shop'> Create account with Google </Link> */}
        </button>
      </form>
    </div>
      </div>
        </div>
    );
};

export default Login;