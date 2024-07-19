// src/Components/UserDetails.js
import React from 'react';

function UserDetails({ userData }) {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">User Details</h1>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <p className="form-control-plaintext">{userData.name}</p>
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <p className="form-control-plaintext">{userData.phone}</p>
        </div>
        <div className="col-md-6">
          <label className="form-label">Email Address</label>
          <p className="form-control-plaintext">{userData.email}</p>
        </div>
        <div className="col-md-6">
          <label className="form-label">Role</label>
          <p className="form-control-plaintext">{userData.role}</p>
        </div>

        {userData.role === 'prospect' && (
          <>
            {userData.interestAddress && (
              <div className="col-md-6">
                <label className="form-label">Address of Interest</label>
                <p className="form-control-plaintext">{userData.interestAddress}</p>
              </div>
            )}
            {userData.leadBudget && (
              <div className="col-md-6">
                <label className="form-label">Budget</label>
                <p className="form-control-plaintext">{userData.leadBudget}</p>
              </div>
            )}
            {userData.leadBedrooms && (
              <div className="col-md-6">
                <label className="form-label">Bedrooms</label>
                <p className="form-control-plaintext">{userData.leadBedrooms}</p>
              </div>
            )}
            {userData.leadBathrooms && (
              <div className="col-md-6">
                <label className="form-label">Bathrooms</label>
                <p className="form-control-plaintext">{userData.leadBathrooms}</p>
              </div>
            )}
            {userData.leadLocation && (
              <div className="col-md-6">
                <label className="form-label">Preferred Location</label>
                <p className="form-control-plaintext">{userData.leadLocation}</p>
              </div>
            )}
            {userData.leadPropertyType && (
              <div className="col-md-6">
                <label className="form-label">Property Type</label>
                <p className="form-control-plaintext">{userData.leadPropertyType.join(', ')}</p>
              </div>
            )}
            {userData.leadWantsNeeds && (
              <div className="col-md-6">
                <label className="form-label">Specific Wants/Needs</label>
                <p className="form-control-plaintext">{userData.leadWantsNeeds}</p>
              </div>
            )}
            {userData.timeFrame && (
              <div className="col-md-6">
                <label className="form-label">Time Frame for Purchase</label>
                <p className="form-control-plaintext">{userData.timeFrame}</p>
              </div>
            )}
            {userData.financingStatus && (
              <div className="col-md-6">
                <label className="form-label">Financing Status</label>
                <p className="form-control-plaintext">{userData.financingStatus}</p>
              </div>
            )}
            {userData.additionalNotes && (
              <div className="col-md-6">
                <label className="form-label">Additional Notes</label>
                <p className="form-control-plaintext">{userData.additionalNotes}</p>
              </div>
            )}
          </>
        )}

        {userData.role === 'buyer' && (
          <>
            {userData.subCat === 'offer' && (
              <>
                {userData.mailAddress && (
                  <div className="col-md-6">
                    <label className="form-label">Address</label>
                    <p className="form-control-plaintext">{userData.mailAddress}</p>
                  </div>
                )}
                {userData.name && (
                  <div className="col-md-6">
                    <label className="form-label">Name Property Will Be Titled In</label>
                    <p className="form-control-plaintext">{userData.name}</p>
                  </div>
                )}
                {userData.offer && (
                  <div className="col-md-6">
                    <label className="form-label">Offer Amount</label>
                    <p className="form-control-plaintext">{userData.offer}</p>
                  </div>
                )}
                {userData.dueDiligence && (
                  <div className="col-md-6">
                    <label className="form-label">Due Diligence Period</label>
                    <p className="form-control-plaintext">{userData.dueDiligence}</p>
                  </div>
                )}
                {userData.daysForInspection && (
                  <div className="col-md-6">
                    <label className="form-label">Days For Inspection</label>
                    <p className="form-control-plaintext">{userData.daysForInspection}</p>
                  </div>
                )}
                {userData.daysForClosing && (
                  <div className="col-md-6">
                    <label className="form-label">Days For Closing</label>
                    <p className="form-control-plaintext">{userData.daysForClosing}</p>
                  </div>
                )}
                {userData.titleCompany && (
                  <div className="col-md-6">
                    <label className="form-label">Title Company</label>
                    <p className="form-control-plaintext">{userData.titleCompany}</p>
                  </div>
                )}
                {userData.escrowAmount && (
                  <div className="col-md-6">
                    <label className="form-label">Escrow Amount</label>
                    <p className="form-control-plaintext">{userData.escrowAmount}</p>
                  </div>
                )}
                {userData.paymentType && (
                  <div className="col-md-6">
                    <label className="form-label">Payment Type</label>
                    <p className="form-control-plaintext">{userData.paymentType}</p>
                  </div>
                )}
              </>
            )}

            {userData.subCat === 'searching' && (
              <>
                {userData.interestAddress && (
                  <div className="col-md-6">
                    <label className="form-label">Address of Interest</label>
                    <p className="form-control-plaintext">{userData.interestAddress}</p>
                  </div>
                )}
                {userData.budget && (
                  <div className="col-md-6">
                    <label className="form-label">Budget</label>
                    <p className="form-control-plaintext">{userData.budget}</p>
                  </div>
                )}
                {userData.bedrooms && (
                  <div className="col-md-6">
                    <label className="form-label">Bedrooms</label>
                    <p className="form-control-plaintext">{userData.bedrooms}</p>
                  </div>
                )}
                {userData.Bathrooms && (
                  <div className="col-md-6">
                    <label className="form-label">Bathrooms</label>
                    <p className="form-control-plaintext">{userData.Bathrooms}</p>
                  </div>
                )}
                {userData.location && (
                  <div className="col-md-6">
                    <label className="form-label">Location</label>
                    <p className="form-control-plaintext">{userData.location}</p>
                  </div>
                )}
                {userData.wantsNeeds && (
                  <div className="col-md-6">
                    <label className="form-label">Wants / Needs</label>
                    <p className="form-control-plaintext">{userData.wantsNeeds}</p>
                  </div>
                )}
                {userData.time && (
                  <div className="col-md-6">
                    <label className="form-label">Time Needed</label>
                    <p className="form-control-plaintext">{userData.time}</p>
                  </div>
                )}
                {userData.propertyType && (
                  <div className="col-md-6">
                    <label className="form-label">Property Type</label>
                    <p className="form-control-plaintext">{userData.propertyType.join(', ')}</p>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {userData.role === 'investor' && (
          <>
            {userData.propertyType && (
              <div className="col-md-6">
                <label className="form-label">Property Type Sought</label>
                <p className="form-control-plaintext">{userData.propertyType}</p>
              </div>
            )}
            {userData.futureUse && (
              <div className="col-md-6">
                <label className="form-label">Future Use</label>
                <p className="form-control-plaintext">{userData.futureUse}</p>
              </div>
            )}
            {userData.budget && (
              <div className="col-md-6">
                <label className="form-label">Budget</label>
                <p className="form-control-plaintext">{userData.budget}</p>
              </div>
            )}
            {userData.location && (
              <div className="col-md-6">
                <label className="form-label">Location</label>
                <p className="form-control-plaintext">{userData.location}</p>
              </div>
            )}
            {userData.wantsNeeds && (
              <div className="col-md-6">
                <label className="form-label">Wants / Needs</label>
                <p className="form-control-plaintext">{userData.wantsNeeds}</p>
              </div>
            )}
            {userData.propertyType && (
              <div className="col-md-6">
                <label className="form-label">Property Type</label>
                <p className="form-control-plaintext">{userData.propertyType.join(', ')}</p>
              </div>
            )}
            {userData.time && (
              <div className="col-md-6">
                <label className="form-label">Time Needed</label>
                <p className="form-control-plaintext">{userData.time}</p>
              </div>
            )}
          </>
        )}

        {userData.role === 'seller' && (
          <>
            {userData.interestAddress && (
              <div className="col-md-6">
                <label className="form-label">Address</label>
                <p className="form-control-plaintext">{userData.interestAddress}</p>
              </div>
            )}
            {userData.budget && (
              <div className="col-md-6">
                <label className="form-label">Sale Price</label>
                <p className="form-control-plaintext">{userData.budget}</p>
              </div>
            )}
            {userData.commission && (
              <div className="col-md-6">
                <label className="form-label">Commission</label>
                <p className="form-control-plaintext">{userData.commission}</p>
              </div>
            )}
            {userData.sellerA && (
              <div className="col-md-6">
                <label className="form-label">Seller A Email</label>
                <p className="form-control-plaintext">{userData.sellerA}</p>
              </div>
            )}
            {userData.sellerB && (
              <div className="col-md-6">
                <label className="form-label">Seller B Email</label>
                <p className="form-control-plaintext">{userData.sellerB}</p>
              </div>
            )}
            {userData.financingStatus && (
              <div className="col-md-6">
                <label className="form-label">Financing Status</label>
                <p className="form-control-plaintext">{userData.financingStatus}</p>
              </div>
            )}
          </>
        )}

        {userData.tasks && userData.tasks.length > 0 && (
          <div className="col-md-12">
            <h3>To Do</h3>
            <ul className="list-group">
              {userData.tasks.map((task, index) => (
                <li key={index} className="list-group-item">
                  {task.taskType}: {task.taskDescription} - {task.dueDate}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
