import React, { useState } from 'react';
import './EditUserForm.css';

function EditUserForm({ userData, onSave }) {
  const [formState, setFormState] = useState({ ...userData });
  const [roleType, setRoleType] = useState(userData.role || 'contact'); // Default role
  const [extraFields, setExtraFields] = useState([]);

  const additionalFieldOptions = [
    { name: 'budget', label: 'Budget' },
    { name: 'interestAddress', label: 'Property of Interest' },
    { name: 'timeFrame', label: 'Time Frame for Purchase' },
    { name: 'financingStatus', label: 'Financing Status' },
    { name: 'propertyType', label: 'Property Type Sought' },
    { name: 'offer', label: 'Offer Amount' },
    { name: 'dueDiligence', label: 'Due Diligence Period' },
    { name: 'daysForClosing', label: 'Days for Closing' },
    { name: 'titleCompany', label: 'Title Company' },
    { name: 'escrowAmount', label: 'Escrow Amount' },
    { name: 'paymentType', label: 'Payment Type' },
    { name: 'futureUse', label: 'Future Use' },
    { name: 'commission', label: 'Commission' },
    { name: 'sellerA', label: 'Seller A Email' },
    { name: 'sellerB', label: 'Seller B Email' },
    { name: 'additionalNotes', label: 'Additional Notes' },
  ];

  // Filter the selection box to only show empty fields
  const availableFieldsToAdd = additionalFieldOptions.filter(
    (field) => !formState[field.name] && !extraFields.includes(field.name)
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleRoleChange = (event) => {
    setRoleType(event.target.value);
  };

  const handleExtraFieldToggle = (field) => {
    setExtraFields((prevFields) =>
      prevFields.includes(field)
        ? prevFields.filter((f) => f !== field)
        : [...prevFields, field]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ ...formState, role: roleType });
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="row">
        {/* Basic Fields */}
        {[
          { name: 'name', label: 'Name', type: 'text' },
          { name: 'email', label: 'Email', type: 'email' },
          { name: 'phone', label: 'Phone', type: 'tel' }
        ].map((field, idx) => (
          <div className="col-md-4 mb-3" key={idx}>
            <label className="form-label">{field.label}</label>
            <input type={field.type} className="form-control" name={field.name}
              value={formState[field.name] || ''} onChange={handleInputChange} required />
          </div>
        ))}

        {/* Mailing Address */}
        {[
          { name: 'mailAddress', label: 'Street Address' },
          { name: 'mailCity', label: 'Mailing City' },
          { name: 'mailState', label: 'Mailing State' },
          { name: 'mailZip', label: 'Mailing Zip' }
        ].map((field, idx) => (
          <div className="col-md-3 mb-3" key={idx}>
            <label className="form-label">{field.label}</label>
            <input type="text" className="form-control" name={field.name}
              value={formState[field.name] || ''} onChange={handleInputChange} required />
          </div>
        ))}

        {/* Role Selection */}
        <div className="col-md-4 mb-3">
          <label className="form-label">Role Type</label>
          <select className="form-select" value={roleType} onChange={handleRoleChange}>
            <option value="contact">Contact</option>
            <option value="customer">Customer</option>
            <option value="lead">Lead</option>
          </select>
        </div>

        {/* Auto-Display Non-Empty Fields */}
        {additionalFieldOptions.map((field) =>
          formState[field.name] ? (
            <div className="col-md-4 mb-3" key={field.name}>
              <label className="form-label">{field.label}</label>
              <input type="text" className="form-control" name={field.name}
                value={formState[field.name]} onChange={handleInputChange} />
            </div>
          ) : null
        )}

        {/* Additional Fields Selection */}
        {availableFieldsToAdd.length > 0 && (
          <div className="col-12 mb-3">
            <label className="form-label">Add More Fields</label>
            <div className="border rounded p-2" style={{ maxHeight: '150px', overflowY: 'scroll' }}>
              {availableFieldsToAdd.map((field) => (
                <div key={field.name} className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={field.name}
                    checked={extraFields.includes(field.name)}
                    onChange={() => handleExtraFieldToggle(field.name)}
                  />
                  <label className="form-check-label ms-1" htmlFor={field.name}>
                    {field.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dynamically Added Fields */}
        {extraFields.map((field) => (
          <div className="col-md-4 mb-3" key={field}>
            <label className="form-label">{additionalFieldOptions.find(f => f.name === field)?.label}</label>
            <input type="text" className="form-control" name={field} value={formState[field] || ''} onChange={handleInputChange} />
          </div>
        ))}
      </div>

      <button type="submit" className="btn btn-primary w-100 mt-3">Save</button>
    </form>
  );
}

export default EditUserForm;
