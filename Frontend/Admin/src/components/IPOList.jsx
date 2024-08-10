import React from 'react';

function IPOList() {
  const [ipos, setIpos] = React.useState([]);

  React.useEffect(() => {
    // Fetch IPOs from API
    // setIpos(fetchedData);
  }, []);

  return (
    <div className="ipo-list">
      <h2>IPO List</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price Band</th>
            <th>Open Date</th>
            <th>Close Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ipos.map(ipo => (
            <tr key={ipo.id}>
              <td>{ipo.companyName}</td>
              <td>{ipo.priceBand}</td>
              <td>{ipo.openDate}</td>
              <td>{ipo.closeDate}</td>
              <td>{ipo.status}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IPOList;