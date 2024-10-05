import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaEye } from 'react-icons/fa';
import axios from 'axios';

const IPOTable = () => {
  const [ipos, setIpos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/api/ipos');
      setIpos(result.data);
    };

    fetchData();
  }, []);

  const deleteIPO = async (id) => {
    await axios.delete(`http://localhost:5000/api/ipos/${id}`);
    setIpos(ipos.filter((ipo) => ipo._id !== id));
  };

  return (
    <div className="ml-64 p-6 bg-white min-h-screen static">
      <h2 className="text-xl font-semibold mb-4">Upcoming IPO | Dashboard</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
          <tr>
            <th className="py-3 px-6 text-left">Company</th>
            <th className="py-3 px-6 text-left">Price Band</th>
            <th className="py-3 px-6 text-left">Open</th>
            <th className="py-3 px-6 text-left">Close</th>
            <th className="py-3 px-6 text-left">Issue Size</th>
            <th className="py-3 px-6 text-left">Issue Type</th>
            <th className="py-3 px-6 text-left">Listing Date</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Action</th>
            <th className="py-3 px-6 text-left">Delete/View</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {ipos.map((ipo, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{ipo.company}</td>
              <td className="py-3 px-6 text-left">{ipo.priceBand}</td>
              <td className="py-3 px-6 text-left">{ipo.open}</td>
              <td className="py-3 px-6 text-left">{ipo.close}</td>
              <td className="py-3 px-6 text-left">{ipo.issueSize}</td>
              <td className="py-3 px-6 text-left">{ipo.issueType}</td>
              <td className="py-3 px-6 text-left">{ipo.listingDate}</td>
              <td className="py-3 px-6 text-left">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    ipo.status === 'Ongoing'
                      ? 'bg-green-200 text-green-600'
                      : ipo.status === 'Coming'
                      ? 'bg-yellow-200 text-yellow-600'
                      : 'bg-red-200 text-red-600'
                  }`}
                >
                  {ipo.status}
                </span>
              </td>
              <td className="py-3 px-6 text-left">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs">
                  Update
                </button>
              </td>
              <td className="py-3 px-6 text-left flex items-center">
                <button
                  className="text-red-500 hover:text-red-700 mr-2"
                  onClick={() => deleteIPO(ipo._id)}
                >
                  <FaTrashAlt />
                </button>
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPOTable;
