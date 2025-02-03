import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactContext } from '../contexts/ContactsContext';
import { Link } from 'react-router-dom';

function Contacts() {
  const { contacts } = useContext(ContactContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all'); // Tabs: 'all', 'contacts', 'prospects'

  // Filter contacts based on selected tab
  const filteredContacts = contacts.filter(contact => {
    if (activeTab === 'contacts') return contact.contactType === 'contact';
    if (activeTab === 'prospects') return contact.contactType === 'prospect';
    return true; // 'all' shows everything
  });

  // Navigate to contact detail page
  const handleContactClick = (contact) => {
    console.log("Navigating to contact:", contact);
    navigate(`/contact/${contact.id}`, { state: { contact } });
  };

  return (
    <div className="container mt-3">
      {/* Tabs for switching between Contacts, Prospects, and All */}
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'all' ? 'active' : ''}`} 
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'contacts' ? 'active' : ''}`} 
            onClick={() => setActiveTab('contacts')}
          >
            Contacts
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'prospects' ? 'active' : ''}`} 
            onClick={() => setActiveTab('prospects')}
          >
            Prospects
          </button>
        </li>
      </ul>

      {/* Header with Add Contact button */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>{activeTab === 'prospects' ? 'Prospects' : activeTab === 'contacts' ? 'Contacts' : 'All Contacts'}</h2>
        <Link className="btn btn-primary" to="/form">
          + Add Contact
        </Link>
      </div>

      {/* Contact Table */}
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact, index) => (
                <tr key={contact.id} onClick={() => handleContactClick(contact)} style={{ cursor: 'pointer' }}>
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.address}</td>
                  <td>{contact.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No contacts found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contacts;
