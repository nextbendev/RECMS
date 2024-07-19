// src/Pages/Prospects.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Prospects() {
  const [prospects, setProspects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // This is where you would fetch data from the database.
    // Since the DB isn't set up, we use dummy data for now.
    const dummyData = [
      {
        id: 1,
        name: 'Michael Scott',
        email: 'michael.scott@example.com',
        phone: '987-654-3210',
        address: '1725 Slough Avenue',
        role: 'prospect',
        interestAddress: '1725 Slough Avenue',
        leadBudget: '300000',
        leadBedrooms: 2,
        leadBathrooms: 1,
        leadLocation: 'Scranton',
        leadWantsNeeds: 'Close to office',
        sellerA: 'janeA@example.com',
        timeFrame: '1 month',
        leadPropertyType: ['Residential'],
        financingStatus: 'Pre-approved',
        additionalNotes: 'N/A',
        tasks: [
          { taskType: 'call', taskDescription: 'Follow up call', dueDate: '2024-08-01' },
          { taskType: 'email', taskDescription: 'Send property listings', dueDate: '2024-08-03' },
        ],
      },
      {
        id: 2,
        name: 'Pam Beesly',
        email: 'pam.beesly@example.com',
        phone: '876-543-2109',
        address: '435 Paper Street',
        role: 'prospect',
        interestAddress: '435 Paper Street',
        leadBudget: '200000',
        leadBedrooms: 3,
        leadBathrooms: 2,
        leadLocation: 'Scranton',
        leadWantsNeeds: 'Near park',
        timeFrame: '2 months',
        leadPropertyType: ['Residential'],
        financingStatus: 'Not approved',
        additionalNotes: 'Looking for a house with a big backyard.',
        tasks: [
          { taskType: 'call', taskDescription: 'Schedule home tour', dueDate: '2024-07-25' },
          { taskType: 'email', taskDescription: 'Discuss financing options', dueDate: '2024-07-30' },
        ],
      },
      {
        id: 3,
        name: 'Jim Halpert',
        email: 'jim.halpert@example.com',
        phone: '765-432-1098',
        address: '212 Sales Drive',
        role: 'prospect',
        interestAddress: '212 Sales Drive',
        leadBudget: '250000',
        leadBedrooms: 4,
        leadBathrooms: 3,
        leadLocation: 'Scranton',
        leadWantsNeeds: 'Good neighborhood',
        timeFrame: '3 months',
        leadPropertyType: ['Residential'],
        financingStatus: 'Cash buyer',
        additionalNotes: 'Prefers a quiet neighborhood.',
        tasks: [
          { taskType: 'call', taskDescription: 'Review neighborhood schools', dueDate: '2024-08-05' },
          { taskType: 'email', taskDescription: 'Meet with realtor', dueDate: '2024-08-10' },
        ],
      },
      {
        id: 4,
        name: 'Dwight Schrute',
        email: 'dwight.schrute@example.com',
        phone: '654-321-0987',
        address: '417 Beet Road',
        role: 'prospect',
        interestAddress: '417 Beet Road',
        leadBudget: '400000',
        leadBedrooms: 5,
        leadBathrooms: 4,
        leadLocation: 'Scranton',
        leadWantsNeeds: 'Farmland',
        timeFrame: '6 months',
        leadPropertyType: ['Residential', 'Land'],
        financingStatus: 'Pre-approved',
        additionalNotes: 'Needs land for beet farming.',
        tasks: [
          { taskType: 'call', taskDescription: 'Evaluate farmland quality', dueDate: '2024-07-28' },
          { taskType: 'email', taskDescription: 'Check zoning laws', dueDate: '2024-08-02' },
        ],
      },
    ];
    
    
    setProspects(dummyData);
  }, []);

  const handleProspectClick = (prospect) => {
    navigate(`/prospect/${prospect.id}`, { state: { prospect } });
  };

  return (
    <div>
      <h2>Prospects</h2>
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
            {prospects.map((prospect, index) => (
              <tr key={prospect.id} onClick={() => handleProspectClick(prospect)}>
                <td>{index + 1}</td>
                <td>{prospect.name}</td>
                <td>{prospect.email}</td>
                <td>{prospect.phone}</td>
                <td>{prospect.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Prospects;
