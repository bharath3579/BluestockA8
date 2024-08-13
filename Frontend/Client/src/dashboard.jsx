import React from 'react';

const MainContent = () => {
  return (
    <div className="ml-64 p-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      
      <div className="grid grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-6  border-e-2">
          <h2 className="text-xl font-semibold">IPO Dashboard India</h2>
          <p className="text-green-500 mt-2">20 IPO in Gain</p>
          <div className="flex mt-4 space-x-6">
            <div className="bg-blue-100 text-blue-500 p-4 rounded-full w-20 h-20 flex items-center justify-center">
              <span>20</span>
            </div>
            <div className="bg-purple-100 text-purple-500 p-4 rounded-full w-20 h-20 flex items-center justify-center">
              <span>9</span>
            </div>
            <div className="bg-orange-100 text-orange-500 p-4 rounded-full w-20 h-20 flex items-center justify-center">
              <span>30</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white p-6 border-e-2">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex justify-between">
              <span>NSE India</span>
              <a href="#" className="text-blue-500">Visit Now</a>
            </li>
            <li className="flex justify-between">
              <span>BSE India</span>
              <a href="#" className="text-blue-500">Visit Now</a>
            </li>
            <li className="flex justify-between">
              <span>SEBI</span>
              <a href="#" className="text-blue-500">Visit Now</a>
            </li>
            <li className="flex justify-between">
              <span>Money Control</span>
              <a href="#" className="text-blue-500">Visit Now</a>
            </li>
          </ul>
        </div>

        {/* Main Board IPO */}
        <div className="bg-white p-6 border-e-2">
          <h2 className="text-xl font-semibold">Main Board IPO</h2>
          <p className="mt-2">From 01 Jan 2024</p>
          <div className="flex mt-4 justify-between items-center">
            <div className="bg-purple-100 text-purple-500 p-6 rounded-full flex items-center justify-center">
              <span>15</span>
            </div>
            <div>
              <ul>
                <li className="flex justify-between">
                  <span>Upcoming</span>
                  <span>15</span>
                </li>
                <li className="flex justify-between">
                  <span>New Listed</span>
                  <span>25</span>
                </li>
                <li className="flex justify-between">
                  <span>Ongoing</span>
                  <span>2</span>
                </li>
              </ul>
            </div>
            <a href="#" className="text-blue-500">View Report</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
