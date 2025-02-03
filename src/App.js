// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PropertyProvider } from './contexts/PropertyContext';
import { ContactProvider } from './contexts/ContactsContext';
import { UserProvider } from './contexts/UserContext';
import Form from './Components/Form';
import Login from './Components/Login';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Contacts from './Pages/Contacts';
import User from './Pages/User'; 
import Tasks from './Pages/Tasks';
import Dashboard from './Pages/Dashboard';
import RealEstateContainer from './Pages/RealEstateContainer';
import PropertyDetail from './Components/PropertyDetail';
import PropertyEdit from './Components/PropertyEdit';
import RealEstateProfile from './Pages/Profile';
import MyProfile from './Pages/MyProfile.js';
import NewsFeed from './Pages/NewsFeed.js';
import Messages from './Pages/Messages.js';
import Mailbox from './Pages/Mailbox.js';

function App() {
  return (
    <PropertyProvider>
      <ContactProvider>
        <UserProvider>
          <Router>
            <div className="App">
              <Header />
              <div className="container-fluid">
                <div className="row">
                  <Sidebar />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/contacts" element={<Contacts contactType="contact"/>} />
                      <Route path="/contact/:id" element={<User />} />
                      <Route path="/prospect/:id" element={<User />} />
                      <Route path="/tasks" element={<Tasks />} />
                      <Route path="/form" element={<Form />} />
                      <Route path="/login" element={<Login />} />
                      {/* <Route path="/myListings" element={<RealEstateContainer creatorId={user.creatorId} />} /> */}
                      <Route path="/myListings" element={<RealEstateContainer creatorId={34895734} />} />
                      <Route path="/allListings" element={<RealEstateContainer />} /> 
                      <Route path="/property/:id" element={<PropertyDetail />} />
                      <Route path="/edit/:id" element={<PropertyEdit />} />
                      <Route path="/profile" element={<RealEstateProfile />} />
                      <Route path="/myProfile" element={<MyProfile/>} />
                      <Route path="/feed" element={<NewsFeed/>} />
                      <Route path="/messages" element={<Messages/>} />
                      <Route path="/mailbox" element={<Mailbox/>} />
                    </Routes>
                  </main>
                </div>
              </div>
            </div>
          </Router>
        </UserProvider>
      </ContactProvider>
    </PropertyProvider>
  );
}

export default App;
