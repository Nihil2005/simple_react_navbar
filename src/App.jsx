import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const diaplay = () => {
    alert('hello')
  }

  return (
    <div>
      <nav className='flex justify-between items-center mt-3 '>
        <div>
          <h1>Logo</h1>
        </div>
        <div className="hidden md:flex justify-end items-center">
        <div>
          <a href="#" className='hover:bg-orange-700 rounded-md p-2'>Home</a>
          <a href="#" className='hover:bg-orange-700 rounded-md p-2'>About</a>
          <a href="#" className='hover:bg-orange-700 rounded-md p-2'>Contact</a>
        </div>
       
      </div>
  
        
        <div className="md:hidden">
          {isOpen ? (
            <FaTimes onClick={toggleMenu} className="text-2xl cursor-pointer" />
          ) : (
            <FaBars onClick={toggleMenu} className="text-2xl cursor-pointer" />
          )}
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-3">
            <li className='hover:bg-orange-700 rounded-md'>
              <a href="#" onClick={diaplay}>Home</a>
            </li>
            <li className='hover:bg-orange-700 rounded-md'>
              <a href="#" onClick={diaplay}>About</a>
            </li>
            <li className='hover:bg-orange-700 rounded-md'>
              <a href="#" onClick={diaplay}>Contact</a>
            </li>
          </ul>
        </div>
      )}
  
      
    </div>
  );
};

export default App;
