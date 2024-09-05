// src/Components/EditUserForm.js
import React, { useState } from 'react';
import './EditUserForm.css';

function EditUserForm({ userData, onSave }) {
  const [formState, setFormState] = useState({ ...userData });

  const handleInputChange = (event) => {
    const { name, value, type, options } = event.target;
    if (type === 'select-multiple') {
      const selectedOptions = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
      setFormState({
        ...formState,
        [name]: selectedOptions,
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
    <div className="row">
      <div className="col-md-6 col-lg-4 mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formState.name || ''}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="col-md-6 col-lg-4 mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formState.email || ''}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="col-md-6 col-lg-4 mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={formState.phone || ''}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="col-md-6 col-lg-4 mb-3">
        <label htmlFor="mailAddress" className="form-label">Mailing Street Address</label>
        <input
          type="text"
          className="form-control"
          id="mailAddress"
          name="mailAddress"
          value={formState.mailAddress || ''}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="mailCity" className="form-label">Mailing City</label>
      <input
        type="text"
        className="form-control"
        id="mailCity"
        name="mailCity"
        value={formState.mailCity || ''}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="mailState" className="form-label">Mailing State</label>
      <input
        type="text"
        className="form-control"
        id="mailState"
        name="mailState"
        value={formState.mailState || ''}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="mailZip" className="form-label">Mailing Zip</label>
      <input
        type="text"
        className="form-control"
        id="mailZip"
        name="mailZip"
        value={formState.mailZip || ''}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="interestAddress" className="form-label">Street Address of Interest</label>
      <input
        type="text"
        className="form-control"
        id="interestAddress"
        name="interestAddress"
        value={formState.interestAddress || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="interestCity" className="form-label">Interest City</label>
      <input
        type="text"
        className="form-control"
        id="interestCity"
        name="interestCity"
        value={formState.interestCity || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="interestState" className="form-label">Interest State</label>
      <input
        type="text"
        className="form-control"
        id="interestState"
        name="interestState"
        value={formState.interestState || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="interestZip" className="form-label">Interest Zip</label>
      <input
        type="text"
        className="form-control"
        id="interestZip"
        name="interestZip"
        value={formState.interestZip || ''}
        onChange={handleInputChange}
      />
    </div>

      
      
    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="timeFrame" className="form-label">Time Frame for Purchase</label>
      <input
        type="text"
        className="form-control"
        id="timeFrame"
        name="timeFrame"
        value={formState.timeFrame || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="financingStatus" className="form-label">Financing Status</label>
      <select
        className="form-control"
        id="financingStatus"
        name="financingStatus"
        value={formState.financingStatus || ''}
        onChange={handleInputChange}
      >
        <option value="null">N/A</option>
        <option value="pre-approved">Pre-approved</option>
        <option value="not approved">Not approved</option>
        <option value="cash buyer">Cash Buyer</option>
      </select>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="offer" className="form-label">Offer Amount</label>
      <input
        type="text"
        className="form-control"
        id="offer"
        name="offer"
        value={formState.offer || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="dueDiligence" className="form-label">Due Diligence Period</label>
      <input
        type="text"
        className="form-control"
        id="dueDiligence"
        name="dueDiligence"
        value={formState.dueDiligence || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="daysForClosing" className="form-label">Days For Closing</label>
      <input
        type="number"
        className="form-control"
        id="daysForClosing"
        name="daysForClosing"
        value={formState.daysForClosing || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="titleCompany" className="form-label">Title Company</label>
      <input
        type="text"
        className="form-control"
        id="titleCompany"
        name="titleCompany"
        value={formState.titleCompany || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="escrowAmount" className="form-label">Escrow Amount</label>
      <input
        type="text"
        className="form-control"
        id="escrowAmount"
        name="escrowAmount"
        value={formState.escrowAmount || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="paymentType" className="form-label">Payment Type</label>
      <input
        type="text"
        className="form-control"
        id="paymentType"
        name="paymentType"
        value={formState.paymentType || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="propertyType" className="form-label">Property Type Sought</label>
      <input
        type="text"
        className="form-control"
        id="propertyType"
        name="propertyType"
        value={formState.propertyType || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="futureUse" className="form-label">Future Use</label>
      <input
        type="text"
        className="form-control"
        id="futureUse"
        name="futureUse"
        value={formState.futureUse || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="commission" className="form-label">Commission</label>
      <input
        type="number"
        className="form-control"
        id="commission"
        name="commission"
        value={formState.commission || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="sellerA" className="form-label">Seller A Email</label>
      <input
        type="email"
        className="form-control"
        id="sellerA"
        name="sellerA"
        value={formState.sellerA || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="sellerB" className="form-label">Seller B Email</label>
      <input
        type="email"
        className="form-control"
        id="sellerB"
        name="sellerB"
        value={formState.sellerB || ''}
        onChange={handleInputChange}
      />
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <label htmlFor="additionalNotes" className="form-label">Additional Notes</label>
      <textarea
        className="form-control"
        id="additionalNotes"
        name="additionalNotes"
        value={formState.additionalNotes || ''}
        onChange={handleInputChange}
      ></textarea>
    </div>
  </div>

  <button type="submit" className="btn btn-primary w-100">Save</button>
</form>

  );
}

export default EditUserForm;
