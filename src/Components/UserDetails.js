// src/Components/UserDetails.js
import React from 'react';

function UserDetails({ userData }) {
  console.log("userdata", userData);

  const renderField = (label, value) => {
    if (value) {
      return (
        <div className="col-md-6">
          <label className="form-label">{label}</label>
          <p className="form-control-plaintext">{Array.isArray(value) ? value.join(', ') : value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">User Details</h1>
      <div className="row mb-3">
        {renderField("Full Name", userData.name)}
        {renderField("Email", userData.email)}
        {renderField("Phone", userData.phone)}
        {renderField("Mailing Address", userData.mailAddress)}
        {renderField("Address of Interest", userData.interestAddress)}
        {renderField("Time Frame", userData.timeFrame)}
        {renderField("Financing Status", userData.financingStatus)}
        {renderField("Offer Amount", userData.offer)}
        {renderField("Due Diligence", userData.dueDiligence)}
        {renderField("Days for Closing", userData.daysForClosing)}
        {renderField("Title Company", userData.titleCompany)}
        {renderField("Escrow Amount", userData.escrowAmount)}
        {renderField("Payment Type", userData.paymentType)}
        {renderField("Property Type", userData.propertyType)}
        {renderField("Future Use", userData.futureUse)}
        {renderField("Budget", userData.budget)}
        {renderField("Location", userData.location)}
        {renderField("Wants/Needs", userData.wantsNeeds)}
        {renderField("Time Needed", userData.time)}
        {renderField("Commission", userData.commission)}
        {renderField("Seller A Email", userData.sellerA)}
        {renderField("Seller B Email", userData.sellerB)}
        {renderField("Financing Options", userData.financingOptions)}
        {renderField("Additional Notes", userData.additionalNotes)}
      </div>
    </div>
  );
}

export default UserDetails;
