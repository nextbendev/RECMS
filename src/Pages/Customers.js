// src/Pages/Customers.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // This is where you would fetch data from the database.
    // Since the DB isn't set up, we use dummy data for now.
    const dummyData = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        address: '123 Main St',
        role: 'buyer',
        interestAddress: '123 Main St',
        budget: '500000',
        bedrooms: 3,
        Bathrooms: 2,
        location: 'New York',
        wantsNeeds: 'Near park',
        subCat: 'searching',
        tasks: [
          { taskType: 'call', taskDescription: 'Follow up on budget', dueDate: '2024-08-01' },
          { taskType: 'email', taskDescription: 'Send new property listings', dueDate: '2024-08-02' },
        ],
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '234-567-8901',
        address: '456 Elm St',
        role: 'seller',
        interestAddress: '456 Elm St',
        budget: '450000',
        commission: 6,
        sellerA: 'janeA@example.com',
        sellerB: 'janeB@example.com',
        financingStatus: 'Pre-approved',
        tasks: [
          { taskType: 'text', taskDescription: 'Confirm showing schedule', dueDate: '2024-07-25' },
          { taskType: 'call', taskDescription: 'Discuss commission details', dueDate: '2024-07-30' },
        ],
      },
      {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob@example.com',
        phone: '345-678-9012',
        address: '789 Oak St',
        role: 'investor',
        propertyType: 'Commercial',
        futureUse: 'Rental',
        budget: '1000000',
        location: 'Los Angeles',
        wantsNeeds: 'High ROI',
        tasks: [
          { taskType: 'email', taskDescription: 'Send investment opportunities', dueDate: '2024-08-05' },
          { taskType: 'call', taskDescription: 'Discuss rental market trends', dueDate: '2024-08-10' },
        ],
      },
      {
        id: 4,
        name: 'Alice Brown',
        email: 'alice@example.com',
        phone: '456-789-0123',
        address: '101 Pine St',
        role: 'lead',
        interestAddress: '101 Pine St',
        budget: '600000',
        bedrooms: 4,
        Bathrooms: 3,
        location: 'San Francisco',
        wantsNeeds: 'Good school district',
        time: '3 months',
        propertyType: ['Residential', 'Land'],
        tasks: [
          { taskType: 'text', taskDescription: 'Check property availability', dueDate: '2024-07-28' },
          { taskType: 'call', taskDescription: 'Schedule meeting with realtor', dueDate: '2024-08-02' },
        ],
      },
      {
        id: 5,
        name: 'Charlie Davis',
        email: 'charlie@example.com',
        phone: '567-890-1234',
        address: '202 Maple St',
        role: 'buyer',
        interestAddress: '202 Maple St',
        budget: '700000',
        bedrooms: 5,
        Bathrooms: 4,
        location: 'Chicago',
        wantsNeeds: 'Close to work',
        subCat: 'offer',
        mailAddress: '202 Maple St',
        name: 'Charlie Davis',
        offer: '650000',
        dueDiligence: '2 weeks',
        daysForClosing: '30 days',
        titleCompany: 'Best Title Co.',
        escrowAmount: '10000',
        paymentType: 'Cash',
        tasks: [
          { taskType: 'email', taskDescription: 'Send offer details', dueDate: '2024-07-22' },
          { taskType: 'call', taskDescription: 'Discuss escrow amount', dueDate: '2024-07-23' },
        ],
      },
    ];

    setCustomers(dummyData);
  }, []);

  const handleCustomerClick = (customer) => {
    console.log("Navigating to customer:", customer); // Debugging line
    navigate(`/customer/${customer.id}`, { state: { customer } });
  };

  return (
    <div>
      <h2>Customers</h2>
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
            {customers.map((customer, index) => (
              <tr key={customer.id} onClick={() => handleCustomerClick(customer)}>
                <td>{index + 1}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
