import React from 'react';
import './index.css'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <div className=" flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <span className="text-xl font-semibold">Bluestock Fintech</span>
      </div>
      <div className="flex items-center space-x-4 bg-gray-200 rounded-md">
        <input
          type="text"
          placeholder="Search"
          className="w-[625px] h-[32px] top-[19px] left-[266px] gap-0 rounded-tl-[5px] rounded-br-none rounded-tr-none rounded-bl-none opacity-[0px] bg-transparent"
        />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Hi, Vishal</span>
          <img
            src="/xyz.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
      </div>
    </nav>
  );
};

export default Navbar;
