import React from 'react';


function IPOList({ ipos }) {
  return (
    <div className="ipo-list">
      <h2>Upcoming IPO</h2>
      <p>Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later.</p>
      <div className="ipo-grid">
        {ipos.map(ipo => (
          <div key={ipo.id} className="ipo-card">
            <div className="ipo-header">
              <div className="ipo-logo">
                {ipo.logo ? (
                  <img src={ipo.logo} alt={`${ipo.companyName} Logo`} />
                ) : (
                  <div className="placeholder-logo">{ipo.companyName.charAt(0)}</div>
                )}
              </div>
              <h3>{ipo.companyName}</h3>
            </div>
            <div className="ipo-details">
              <div className="ipo-detail">
                <span>PRICE BAND</span>
                <strong>{ipo.priceBand || 'Not Issued'}</strong>
              </div>
              <div className="ipo-detail">
                <span>OPEN</span>
                <strong>{ipo.openDate || '-'}</strong>
              </div>
              <div className="ipo-detail">
                <span>CLOSE</span>
                <strong>{ipo.closeDate || '-'}</strong>
              </div>
              <div className="ipo-detail">
                <span>ISSUE SIZE</span>
                <strong>{ipo.issueSize || 'Not Issued'}</strong>
              </div>
              <div className="ipo-detail">
                <span>ISSUE TYPE</span>
                <strong>{ipo.issueType || '-'}</strong>
              </div>
              <div className="ipo-detail">
                <span>LISTING DATE</span>
                <strong>{ipo.listingDate || '-'}</strong>
              </div>
            </div>
            <div className="ipo-actions">
              <button className="rhp-btn">RHP</button>
              <button className="drhp-btn">DRHP</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IPOList;