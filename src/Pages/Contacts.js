// src/Pages/Contacts.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactContext } from '../contexts/ContactsContext';

function Contacts({ contactType }) {
  // Get the contacts from the ContactContext
  const { contacts } = useContext(ContactContext);

  // Filter contacts by contactType if it's passed as a prop
  const filteredContacts = contactType 
    ? contacts.filter(contact => contact.contactType === contactType)
    : contacts;

  const navigate = useNavigate();

  // Navigate to the contact detail page
  const handleContactClick = (contact) => {
    console.log("Navigating to contact:", contact); // Debugging line
    navigate(`/contact/${contact.id}`, { state: { contact } });
  };

  return (
    <div>
      <h2>{contactType === 'prospect' ? 'Prospects' : 'Contacts'}</h2>
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
            {filteredContacts.map((contact, index) => (
              <tr key={contact.id} onClick={() => handleContactClick(contact)} style={{ cursor: 'pointer' }}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contacts;
