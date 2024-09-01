import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import IPOList from './components/IPOList';
import IPOForm from './components/IPOForm';
import AdminList from './components/AdminList';
import UserList from './components/UserList';
import './styles.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [ipos, setIpos] = useState([]);

  useEffect(() => {
    setIpos([
      {
        id: 1,
        companyName: 'Nova Agritech Ltd.',
        logo: 'path_to_logo.png',
        priceBand: 'Rs 39 - 41',
        openDate: '2024-01-22',
        closeDate: '2024-01-24',
        issueSize: '143.81 Cr.',
        issueType: 'Book Built',
        listingDate: '2024-01-30',
      },
      // Add more IPO objects as needed
    ]);
  }, []);

  const handleAddIPO = (newIPO) => {
    setIpos(prevIpos => [...prevIpos, { ...newIPO, id: Date.now() }]);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'ipoList':
        return <IPOList ipos={ipos} />;
      case 'ipoForm':
        return <IPOForm onAddIPO={handleAddIPO} />;
      case 'adminList':
        return <AdminList />;
      case 'userList':
        return <UserList />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar setActivePage={setActivePage} />
        <div className="page-content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
