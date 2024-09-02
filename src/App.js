// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PropertyProvider } from './contexts/PropertyContext';
import Form from './Components/Form';
import Login from './Components/Login';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Contacts from './Pages/Contacts';
import Prospects from './Pages/Prospects';
import User from './Pages/User'; 
import Tasks from './Pages/Tasks';
import Dashboard from './Scripts/Dashboard';
import RealEstateContainer from './Pages/RealEstateContainer';
import PropertyDetail from './Components/PropertyDetail';
import PropertyEdit from './Components/PropertyEdit';

function App() {
  return (
    <PropertyProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/contact/:id" element={<User />} />
                  <Route path="/prospects" element={<Prospects />} />
                  <Route path="/prospect/:id" element={<User />} />
                  <Route path="/tasks" element={<Tasks />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/listings" element={<RealEstateContainer />} /> 
                  <Route path="/property/:id" element={<PropertyDetail />} />
                  <Route path="/edit/:id" element={<PropertyEdit />} />

                </Routes>
              </main>
            </div>
          </div>
        </div>
      </Router>
    </PropertyProvider>
  );
}

export default App;
