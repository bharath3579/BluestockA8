import React from 'react';
import Navbar from './navbar'
import Sidebar from './sidebar';
import Dashboard from './dashboard'
import IPOtable from './manageipo'
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
              <Route path="/manageipo" element={<IPOtable />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;