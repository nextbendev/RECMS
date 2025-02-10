import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../contexts/GlobalContext";
import { Link } from "react-router-dom";

function Contacts() {
  const { state } = useGlobalState();  // ✅ Get state from GlobalContext safely
  const contacts = state?.contacts || [];  // ✅ Prevent undefined errors
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  if (!state || !state.contacts) {
    console.error("Contacts not found in Global Context");
    return <p>Error: No contacts available.</p>;
  }

  const filteredContacts = contacts.filter((contact) => {
    if (activeTab === "contacts") return contact.role === "buyer" || contact.role === "seller";
    if (activeTab === "prospects") return contact.role === "prospect";
    if (activeTab === "lead") return contact.role === "lead";
    return true;
  });
  console.log("env test", process.env.REACT_APP_DB_USERNAME)

  const handleContactClick = (contact) => {
    if (!contact || !contact.id) {
      console.error("Invalid contact data:", contact);
      return;
    }
    navigate(`/contact/${contact.id}`);
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
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'lead' ? 'active' : ''}`} 
            onClick={() => setActiveTab('lead')}
          >
            Leads
          </button>
        </li>
      </ul>
      <h2>Contacts</h2>
      <Link className="btn btn-primary" to="/form">+ Add Contact</Link>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact, index) => (
              <tr key={contact.id} onClick={() => handleContactClick(contact)} style={{ cursor: "pointer" }}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No contacts found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
