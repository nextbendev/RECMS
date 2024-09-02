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
    <form onSubmit={handleSubmit} className="edit-user-form">
      <div className="form-row">
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="mailAddress" className="form-label">Mailing Address</label>
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
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="interestAddress" className="form-label">Address of Interest</label>
          <input
            type="text"
            className="form-control"
            id="interestAddress"
            name="interestAddress"
            value={formState.interestAddress || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="leadBudget" className="form-label">Budget</label>
          <input
            type="text"
            className="form-control"
            id="leadBudget"
            name="leadBudget"
            value={formState.leadBudget || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="leadBedrooms" className="form-label">Bedrooms</label>
          <input
            type="number"
            className="form-control"
            id="leadBedrooms"
            name="leadBedrooms"
            value={formState.leadBedrooms || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="leadBathrooms" className="form-label">Bathrooms</label>
          <input
            type="number"
            className="form-control"
            id="leadBathrooms"
            name="leadBathrooms"
            value={formState.leadBathrooms || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="leadLocation" className="form-label">Preferred Location</label>
          <input
            type="text"
            className="form-control"
            id="leadLocation"
            name="leadLocation"
            value={formState.leadLocation || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="leadPropertyType" className="form-label">Property Type</label>
          <select
            className="form-control"
            id="leadPropertyType"
            name="leadPropertyType"
            multiple
            value={formState.leadPropertyType || []}
            onChange={handleInputChange}
          >
            <option value="commercial">Commercial</option>
            <option value="residential">Residential</option>
            <option value="land">Land</option>
            <option value="ag">Ag</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="leadWantsNeeds" className="form-label">Specific Wants/Needs</label>
          <textarea
            className="form-control"
            id="leadWantsNeeds"
            name="leadWantsNeeds"
            value={formState.leadWantsNeeds || ''}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
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
        <div className="form-group">
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
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="mailAddress" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="mailAddress"
            name="mailAddress"
            value={formState.mailAddress || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name Property Will Be Titled In</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formState.name || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
      </div>

      <div className="form-row">
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="budget" className="form-label">Budget</label>
          <input
            type="text"
            className="form-control"
            id="budget"
            name="budget"
            value={formState.budget || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formState.location || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="wantsNeeds" className="form-label">Wants / Needs</label>
          <input
            type="text"
            className="form-control"
            id="wantsNeeds"
            name="wantsNeeds"
            value={formState.wantsNeeds || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="propertyType" className="form-label">Property Type</label>
          <select
            className="form-control"
            id="propertyType"
            name="propertyType"
            multiple
            value={formState.propertyType || []}
            onChange={handleInputChange}
          >
            <option value="commercial">Commercial</option>
            <option value="residential">Residential</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="time" className="form-label">Time Needed</label>
          <input
            type="text"
            className="form-control"
            id="time"
            name="time"
            value={formState.time || ''}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="interestAddress" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="interestAddress"
            name="interestAddress"
            value={formState.interestAddress || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="budget" className="form-label">Sale Price</label>
          <input
            type="text"
            className="form-control"
            id="budget"
            name="budget"
            value={formState.budget || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="financingStatus" className="form-label">Financing Status</label>
          <select
            className="form-control"
            id="financingStatus"
            name="financingStatus"
            value={formState.financingStatus || ''}
            onChange={handleInputChange}
          >
            <option value="pre-approved">Pre-approved</option>
            <option value="not approved">Not approved</option>
            <option value="cash buyer">Cash Buyer</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="financingOptions" className="form-label">Financing Options</label>
          <select
            multiple
            className="form-control"
            id="financingOptions"
            name="financingOptions"
            value={formState.financingOptions || []}
            onChange={handleInputChange}
          >
            <option value="cash">Cash</option>
            <option value="owner">Owner</option>
            <option value="conventional">Conventional</option>
            <option value="fha">FHA</option>
          </select>
        </div>
        <div className="form-group">
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

      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
}

export default EditUserForm;
