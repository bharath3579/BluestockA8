import React, { useState, useEffect } from 'react';

function AdminList() {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ username: '', email: '' });

  useEffect(() => {
    // Fetch admins from API
    // For demonstration, we'll use dummy data
    setAdmins([
      { id: 1, username: 'admin1', email: 'admin1@example.com' },
      { id: 2, username: 'admin2', email: 'admin2@example.com' },
    ]);
  }, []);

  const handleInputChange = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };

  const handleAddAdmin = () => {
    // In a real app, you'd send this to your API
    const addedAdmin = { ...newAdmin, id: Date.now() };
    setAdmins([...admins, addedAdmin]);
    setNewAdmin({ username: '', email: '' });
  };

  const handleDeleteAdmin = (id) => {
    // In a real app, you'd send a delete request to your API
    setAdmins(admins.filter(admin => admin.id !== id));
  };

  return (
    <div className="admin-list">
      <h2>Admin Management</h2>
      <div className="add-admin-form">
        <input
          type="text"
          name="username"
          value={newAdmin.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={newAdmin.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <button onClick={handleAddAdmin}>Add Admin</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => (
            <tr key={admin.id}>
              <td>{admin.username}</td>
              <td>{admin.email}</td>
              <td>
                <button onClick={() => handleDeleteAdmin(admin.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminList;