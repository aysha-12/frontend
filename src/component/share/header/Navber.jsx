import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/Group 1321321162.png'
import imgA from '../../../assets/Group 1321321171.png'
import imgb from '../../../assets/Group 1321321172.png'
const Navber = () => {
       const navItems = [
    {
        route: 'Home',
        path: '/'
    },
    
    {
        route:'About Us',
        path: '/about'
    },
    {
        route: 'Shop',
        path: '/shop'
    },
    {
        route: 'what are peptides',
        path: '/what'
    },
    {
        route: 'Contact',
        path: '/contact'
    },
     {
        route: 'Blogs',
        path: '/blogs'
    },
]
    return (
       <div className=' bg-base-100'>
         <div  className=' px-3 md:px-27 '>
         <div className="navbar   ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn bg-[#00c3b9]  text-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
          navItems.map((data,i)=><button  className='hover:font-semibold' key={i}><Link to={data.path}>{data.route}</Link></button>)
        }
       
      </ul>
    </div >
    <img className='ml-5 md:ml-0 w-20 md:w-36' height={200} width={200} src={img} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal gap-5 px-1">
       {
          navItems.map((data,i)=><button key={i} className='hover:font-semibold'  ><Link to={data.path}>{data.route}</Link></button>)
        }
    </ul>
  </div>
  <div className="navbar-end ml-2 md:ml-0 gap-3 ">
    {/* <Link to='/'><img className='border-2 rounded-full md:text-xl ' src={imgA} alt="" /></Link> */}
    <Link to='/sign'><img className='border-2 rounded-full md:text-xl h-13 w-13' src={imgb} alt="" /></Link>
  </div>
</div>      
        </div>
       </div>
    );
};

export default Navber;