import React from 'react';
import { FaHome, FaChartLine, FaCog, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-4 fixed">
      <ul className="space-y-4">
        <li className="hover:text-blue-500 flex items-center space-x-2">
          <FaHome />
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaChartLine />
          <Link to="/manageipo">Manage IPO</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaCog />
          <a href="/">Settings</a>
        </li>
        <li className="flex items-center space-x-2">
          <FaQuestionCircle />
          <a href='/'>Help</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;