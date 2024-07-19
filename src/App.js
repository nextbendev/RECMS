// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Components/Form';
import Login from './Components/Login';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Customers from './Pages/Customers';
import Prospects from './Pages/Prospects';
import User from './Pages/User'; // Assuming User component handles both customer and prospect views
import Tasks from './Pages/Tasks';
import Dashboard from './Scripts/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/customer/:id" element={<User />} />
                <Route path="/prospects" element={<Prospects />} />
                <Route path="/prospect/:id" element={<User />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/form" element={<Form />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
