import React, { useState } from 'react';
import '../Stylesheets/Form.css';

function LeadIntakeForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        leadSource: '',
        interestAddress: '',
        budget: '',
        propertyType: '',
        preferredContactMethod: '',
        urgency: '',
        financingPlan: '',
        timelineToPurchase: '',
        notes: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Lead Data:', formData);
        // Add logic to process form data
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            {/* Personal Information */}
            <div className="row mb-3">
                <div className="col-md-2 mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="leadSource" className="form-label">Lead Source</label>
                    <select className="form-control" id="leadSource" name="leadSource" value={formData.leadSource} onChange={handleInputChange}>
                        <option value="">Select Source</option>
                        <option value="referral">Referral</option>
                        <option value="socialMedia">Social Media</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="openHouse">Open House</option>
                        <option value="floor">Floor Time</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            {/* Budget & Property Interest */}
            <div className="row mb-3">
                <div className="col-md-2 mb-3">
                    <label htmlFor="interestAddress" className="form-label">Property of Interest</label>
                    <input type="text" className="form-control" id="interestAddress" name="interestAddress" value={formData.interestAddress} onChange={handleInputChange} />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="budget" className="form-label">Budget</label>
                    <input type="text" className="form-control" id="budget" name="budget" value={formData.budget} onChange={handleInputChange} />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="propertyType" className="form-label">Property Type</label>
                    <select className="form-control" id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleInputChange}>
                        <option value="">Select Property Type</option>
                        <option value="singleFamily">Single-Family Home</option>
                        <option value="multiFamily">Multi-Family Home</option>
                        <option value="condo">Condominium</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="land">Land</option>
                        <option value="commercial">Commercial Property</option>
                    </select>
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="preferredContactMethod" className="form-label">Contact by</label>
                    <select className="form-control" id="preferredContactMethod" name="preferredContactMethod" value={formData.preferredContactMethod} onChange={handleInputChange}>
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                        <option value="text">Text</option>
                    </select>
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="urgency" className="form-label">Urgency Level</label>
                    <select className="form-control" id="urgency" name="urgency" value={formData.urgency} onChange={handleInputChange}>
                        <option value="">Select Urgency</option>
                        <option value="immediate">Immediate</option>
                        <option value="3months">Within 3 Months</option>
                        <option value="6months">Within 6 Months</option>
                        <option value="12months">Within a Year</option>
                        <option value="future">Future Interest</option>
                    </select>
                </div>
            </div>

            {/* Contact Preference & Urgency */}
            <div className="row mb-3">
                
            </div>

            {/* Financing & Timeline */}
            <div className="row mb-3">
                <div className="col-md-2 mb-3">
                    <label htmlFor="financingPlan" className="form-label">Financing Plan</label>
                    <select className="form-control" id="financingPlan" name="financingPlan" value={formData.financingPlan} onChange={handleInputChange}>
                        <option value="">Select Plan</option>
                        <option value="cash">Cash Buyer</option>
                        <option value="preApproved">Pre-Approved Loan</option>
                        <option value="seekingLoan">Seeking Loan Approval</option>
                    </select>
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="timelineToPurchase" className="form-label">Timeline to Purchase</label>
                    <input type="text" className="form-control" id="timelineToPurchase" name="timelineToPurchase" value={formData.timelineToPurchase} onChange={handleInputChange} />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="notes" className="form-label">Additional Notes</label>
                    <textarea className="form-control" id="notes" name="notes" rows="3" value={formData.notes} onChange={handleInputChange}></textarea>
                </div>
            </div>
            {/* Submit Button */}
            <div className="row mb-3">
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary w-50">Submit Lead</button>
                </div>
            </div>
        </form>
    );
}

export default LeadIntakeForm;
