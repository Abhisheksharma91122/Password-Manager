import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-slate-800'>
      <div className="flex justify-between items-center mycontainer py-2">
        <div className="logo text-xl font-bold text-white">
          <span className='text-green-500'>&lt;</span>                   
          <span className='text-2xl'>Pass</span>                        
          <span className='text-green-500 text-2xl'>OP/&gt;</span>    
        </div>
        {/* <ul className="flex gap-6 text-white font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul> */}
        <button className='text-white bg-green-500 flex justify-center items-center p-1 rounded-full cursor-pointer'>
          <img className='invert w-8' src="/icons/github.svg" alt="github" />
          <span className='px-2 font-bold'>GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
