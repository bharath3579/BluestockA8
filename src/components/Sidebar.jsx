import React from 'react';

function Sidebar({ setActivePage }) {
  return (
    <nav className="sidebar">
      <ul>
        <li onClick={() => setActivePage('dashboard')}>Dashboard</li>
        <li onClick={() => setActivePage('ipoList')}>IPO List</li>
        <li onClick={() => setActivePage('ipoForm')}>Add/Edit IPO</li>
        <li onClick={() => setActivePage('adminList')}>Admin Management</li>
        <li onClick={() => setActivePage('userList')}>User Management</li>
      </ul>
    </nav>
  );
}

export default Sidebar;