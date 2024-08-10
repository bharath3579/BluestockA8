import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import IPOList from './components/IPOList';
import IPOForm from './components/IPOForm';
import AdminList from './components/AdminList';
import UserList from './components/UserList';

function App() {
  const [activePage, setActivePage] = React.useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'ipoList':
        return <IPOList />;
      case 'ipoForm':
        return <IPOForm />;
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