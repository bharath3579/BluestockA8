import React from 'react';

const IPOTable = () => {
    const ipos = [
        {
          company: 'Adani Power',
          priceBand: '₹ 129 - 136',
          open: '2024-06-03',
          close: '2024-06-05',
          issueSize: '130.15 Cr.',
          issueType: 'Book Built',
          listingDate: '2024-06-10',
          status: 'Ongoing',
        },
        {
          company: 'VBL LTD',
          priceBand: '₹ 129 - 136',
          open: '2024-06-03',
          close: '2024-06-05',
          issueSize: '130.15 Cr.',
          issueType: 'Book Built',
          listingDate: '2024-06-10',
          status: 'Coming',
        },
        {
          company: 'Tata Motor',
          priceBand: '₹ 129 - 136',
          open: '2024-06-03',
          close: '2024-06-05',
          issueSize: '130.15 Cr.',
          issueType: 'Book Built',
          listingDate: '2024-06-10',
          status: 'New Listed',
        },
        {
          company: 'BSE India',
          priceBand: '₹ 129 - 136',
          open: '2024-06-03',
          close: '2024-06-05',
          issueSize: '130.15 Cr.',
          issueType: 'Book Built',
          listingDate: '2024-06-10',
          status: 'New Listed',
        },
      ];

  return (
    <div className="ml-64 p-6 bg-white min-h-screen static">
      <h2 className="text-xl font-semibold mb-4">Upcoming IPO | Dashboard</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg ">
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
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {ipo.company}
              </td>
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
                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs">Update</button>
              </td>
              <td className="py-3 px-6 text-left">
                <button className="text-red-500 hover:text-red-700 mr-2">
                  <i className="fas fa-trash-alt"></i>
                </button>
                <button className="text-blue-500 hover:text-blue-700">
                  <i className="fas fa-eye"></i>
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
