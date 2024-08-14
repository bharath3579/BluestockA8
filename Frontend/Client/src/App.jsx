import React from 'react';
import Navbar from './navbar'
import Sidebar from './sidebar';
import Dashboard from './dashboard'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
  <Router>
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;