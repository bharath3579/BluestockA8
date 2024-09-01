import React, { useState, useEffect } from 'react';

function IPOForm({ onAddIPO }) {
  const [ipos, setIpos] = useState([]);
  const [editingIpo, setEditingIpo] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '',
    priceBand: '',
    openDate: '',
    closeDate: '',
    issueSize: '',
    issueType: '',
    listingDate: '',
    status: '',
    ipoPrice: '',
    listingPrice: '',
    listingGain: '',
    currentMarketPrice: '',
    currentReturn: '',
    logo: null,
  });

  useEffect(() => {
    setIpos([
      {
        id: 1,
        companyName: 'Tech Corp',
        priceBand: '100-120',
        openDate: '2024-09-01',
        closeDate: '2024-09-03',
        issueSize: '1000 Cr',
        issueType: 'Book Built',
        listingDate: '2024-09-10',
        status: 'Upcoming',
        ipoPrice: '',
        listingPrice: '',
        listingGain: '',
        currentMarketPrice: '',
        currentReturn: '',
        logo: null,
      },
      // Add more dummy IPOs as needed
    ]);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIpo) {
      setIpos(ipos.map(ipo => ipo.id === editingIpo.id ? { ...ipo, ...formData } : ipo));
      setEditingIpo(null);
    } else {
      onAddIPO(formData);
      setIpos([...ipos, { ...formData, id: Date.now() }]);
    }
    setFormData({
      companyName: '',
      priceBand: '',
      openDate: '',
      closeDate: '',
      issueSize: '',
      issueType: '',
      listingDate: '',
      status: '',
      ipoPrice: '',
      listingPrice: '',
      listingGain: '',
      currentMarketPrice: '',
      currentReturn: '',
      logo: null,
    });
  };

  const handleEdit = (ipo) => {
    setEditingIpo(ipo);
    setFormData(ipo);
  };

  const handleDelete = (id) => {
    setIpos(ipos.filter(ipo => ipo.id !== id));
  };

  return (
    <div className="ipo-form">
      <h2>{editingIpo ? 'Edit IPO' : 'Add New IPO'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          placeholder="Company Name"
          required
        />
        <input
          type="text"
          name="priceBand"
          value={formData.priceBand}
          onChange={handleInputChange}
          placeholder="Price Band"
          required
        />
        <div>
          <label>Open Date:</label>
          <input
            type="date"
            name="openDate"
            value={formData.openDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Close Date:</label>
          <input
            type="date"
            name="closeDate"
            value={formData.closeDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          type="text"
          name="issueSize"
          value={formData.issueSize}
          onChange={handleInputChange}
          placeholder="Issue Size"
          required
        />
        <input
          type="text"
          name="issueType"
          value={formData.issueType}
          onChange={handleInputChange}
          placeholder="Issue Type"
          required
        />
        <div>
          <label>Listing Date:</label>
          <input
            type="date"
            name="listingDate"
            value={formData.listingDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <select
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Status</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
          <option value="Listed">Listed</option>
        </select>
        <input
          type="number"
          name="ipoPrice"
          value={formData.ipoPrice}
          onChange={handleInputChange}
          placeholder="IPO Price"
        />
        <input
          type="number"
          name="listingPrice"
          value={formData.listingPrice}
          onChange={handleInputChange}
          placeholder="Listing Price"
        />
        <input
          type="number"
          name="listingGain"
          value={formData.listingGain}
          onChange={handleInputChange}
          placeholder="Listing Gain"
        />
        <input
          type="number"
          name="currentMarketPrice"
          value={formData.currentMarketPrice}
          onChange={handleInputChange}
          placeholder="Current Market Price"
        />
        <input
          type="number"
          name="currentReturn"
          value={formData.currentReturn}
          onChange={handleInputChange}
          placeholder="Current Return"
        />
        <div>
          <label>Company Logo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
          />
        </div>
        {formData.logo && (
          <div>
            <img src={formData.logo} alt="Company Logo" style={{ width: '100px' }} />
          </div>
        )}
        <button type="submit">{editingIpo ? 'Update IPO' : 'Add IPO'}</button>
      </form>

      <h2>IPO List</h2>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Company Name</th>
            <th>Price Band</th>
            <th>Open Date</th>
            <th>Close Date</th>
            <th>Issue Size</th>
            <th>Listing Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ipos.map(ipo => (
            <tr key={ipo.id}>
              <td>
                {ipo.logo && (
                  <img src={ipo.logo} alt={`${ipo.companyName} Logo`} style={{ width: '50px' }} />
                )}
              </td>
              <td>{ipo.companyName}</td>
              <td>{ipo.priceBand}</td>
              <td>{ipo.openDate}</td>
              <td>{ipo.closeDate}</td>
              <td>{ipo.issueSize}</td>
              <td>{ipo.listingDate}</td>
              <td>{ipo.status}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(ipo)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(ipo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IPOForm;
