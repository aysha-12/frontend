
import { Link, NavLink } from 'react-router-dom';
import img from '../../../assets/Group 1321321162.png'
import imgA from '../../../assets/Group 1321321171.png'
import imgb from '../../../assets/Group 1321321172.png'
import { useContext } from 'react';
import { authContext } from '../../../auth-context/UserContext';




const Navber = () => {
  const {user,manage}=useContext(authContext)


  const click=()=>{
    manage()
    
    
  }
  
    return (
       <div className=' bg-base-100'>
         <div  className=' py-2 px-3 md:px-10 lg:px-20 '>
         <div className="navbar   ">
  <div className="navbar-start  md:gap-3">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn bg-[#00c3b9]   text-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box  z-1 mt-3 md:w-70 w-52 p-2  shadow">
         <NavLink to='/' ><li className='btn btn-ghost md:text-xl'>Home</li></NavLink>
       <NavLink to='/about' ><li className='btn btn-ghost md:text-xl'>About us</li></NavLink>
       <li >
        <details>
          <summary className='font-semibold mt-1 '>Shop</summary>
          <ul className="p-2">
            <li><NavLink to='/bundles'className='btn btn-ghost md:text-xl' >Bundles </NavLink></li>
            <li><NavLink to='/product'className='btn btn-ghost md:text-xl' >Product </NavLink></li>
           
          </ul>
        </details>
        </li>
       
       <NavLink to='/what' ><li className='btn btn-ghost md:text-xl'>what are peptides</li></NavLink>
       <NavLink to='/contact' ><li className='btn btn-ghost md:text-xl'>Contact</li></NavLink>
       <NavLink to='/blogs' ><li className='btn btn-ghost md:text-xl'>Blogs</li></NavLink>
       
      </ul>
    </div >
    <img className='ml-2 md:ml-0 w-24 md:w-36' height={200} width={200} src={img} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 ">
       <NavLink to='/' ><li className='btn btn-ghost '>Home</li></NavLink>
       <NavLink to='/about' ><li className='btn btn-ghost '>About us</li></NavLink>
        <li >
        <details>
          <summary className='font-semibold mt-1'>Shop</summary>
          <ul className="p-2">
            <li><NavLink to='/bundles' >Bundles </NavLink></li>
            <li><NavLink to='/product' >Product </NavLink></li>
           
          </ul>
        </details>
        </li>

        
       <NavLink to='/what' ><li className='btn btn-ghost '>what are peptides</li></NavLink>
       <NavLink to='/contact' ><li className='btn btn-ghost '>Contact</li></NavLink>
       <NavLink to='/blogs' ><li className='btn btn-ghost '>Blogs</li></NavLink>

    </ul>
  </div>
  <div className="navbar-end ml-2 md:ml-0 gap-3 ">  
    
     <div className='flex gap-2 items-center'> 
   <div>
        {
         user?.uid ? <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost h-13 w-13   btn-circle avatar">
        <div className=" rounded-full">
         <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-60 p-2 shadow">
        <li>
          <a className="justify-between">
            {user?.email}
            
          </a>
        </li>
        <li><a>{user?.uid}</a></li>
        <li><button onClick={click} >Logout</button></li>
      </ul>
    </div> : <button ><Link to='/sign'><img className=' rounded-full md:text-2xl ml-3 ' src={imgb} alt="" /></Link> </button> 
        }
       </div>
      <div className='relative '>
       <div className='mr-20'>
         <div className='rounded-full bg-[#00c3b9] text-white border-0 px-2 text-center absolute   mb-5 '>2</div>
       </div>
      <Link to='/'><img className=' rounded-full md:text-2xl ml-3 ' src={imgA} alt="" /></Link>
      </div>

  </div> 
   
    
  </div>
</div>      
        </div>
        
       </div>
    );
};

export default Navber;