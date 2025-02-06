import React, { useState, useEffect } from 'react';
import '../Stylesheets/Form.css';
import EndUser from './EndUser';
import REInput from './REInput';
import LeadIntakeForm from './NewLead';
import { useLocation } from 'react-router-dom';

function Form() {
  // Set default state for the form
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: 'generic',
    subCat: '',
    mailAddress: '',
    interestAddress: '',
    budget: '',
    bedrooms: '',
    Bathrooms: '',
    location: '',
    wantsNeeds: '',
    propertyType: '',
    offer: '',
    dueDiligence: '',
    daysForClosing: '',
    titleCompany: '',
    escrowAmount: '',
    paymentType: '',
    financeOption: '',
    futureUse: '',
    commission: '',
    sellerA: '',
    sellerB: '',
    time: '',
    term: '',
  });

  const location = useLocation();

  // Check if a role was passed via location state (e.g. state: { role: 're' })
  useEffect(() => {
    if (location.state?.role) {
      setFormData(prevState => ({
        ...prevState,
        role: location.state.role,
      }));
    }
  }, [location.state]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (name === 'role' && value !== 'buyer') {
      setFormData(prevState => ({
        ...prevState,
        role: value,
        subCat: '' // Reset subCat when role is not 'buyer'
      }));
    } else if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        [name]: checked
      }));
    } else if (type === 'select-multiple') {
      const options = event.target.options;
      const selectedOptions = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedOptions.push(options[i].value);
        }
      }
      setFormData(prevState => ({
        ...prevState,
        [name]: selectedOptions
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  // Uncomment and complete the handleSubmit when ready to process the form
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Form Data:', formData);
  //   // Add logic to process or validate form data
  // };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Select Role</label>
        <select
          className="form-control"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="contact">Contact</option>
          <option value="lead">Lead</option>
          <option value="re">Listing</option>
        </select>
      </div>

      {formData.role === 'contact' && (
        <div>
          <h3>Contact Information</h3>
          <EndUser />
        </div>
      )}
      {formData.role === 'lead' && (
        <div>
          <h3>New Lead Information</h3>
          <LeadIntakeForm />
        </div>
      )}
      {formData.role === 're' && (
        <div>
          <h3>New Listing</h3>
          <REInput />
        </div>
      )}
    </div>
  );
}

export default Form;
