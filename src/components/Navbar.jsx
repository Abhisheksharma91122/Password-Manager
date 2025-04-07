import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-purple-400'>
      <div className="flex justify-between items-center mycontainer py-5">
        <div className="logo text-xl font-bold text-white"> <span>&lt;</span> Passop <span>/ &gt;</span></div>
        <ul className="flex gap-6 text-white font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
