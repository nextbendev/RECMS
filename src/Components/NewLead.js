import React, { useState } from 'react';
import '../Stylesheets/Form.css';

function LeadIntakeForm() {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', coBuyerName: '', coBuyerEmail:'', phone: '', email: '',
        bestTimeToContact: '', leadSource: '', interestAddress: '',
        budgetMin: '', budgetMax: '', propertyType: '', propertySubtype: '',
        minBedrooms: '', minBathrooms: '', preferredNeighborhoods: '',
        homeFeatures: '', homeAgePreference: '', financingPlan: '',
        downPayment: '', loanType: '', creditScore: '', existingHomeToSell: '',
        preApproval: '', workingWithAgent: '', preferredShowings: '',
        timelineToPurchase: '', notes: '', coBuyerName:'', cobuyerLastName:'', cobuyerEmail:'', 
        cobuyerPhone:'',
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
    };

    return (
        <form onSubmit={handleSubmit} className="container bg-light shadow-sm rounded p-3">
            {/* Personal Information */}
            <div className="row g-2">
                {[
                    { name: 'firstName', label: 'First Name' },
                    { name: 'lastName', label: 'Last Name' },
                    { name: 'email', label: 'Email', type: 'email' },
                    { name: 'phone', label: 'Phone', type: 'tel' },
                    { name: 'coBuyerName', label: 'Co-Buyer Name (if any)' },
                    { name: 'cobuyerLastName', label: 'Last Name' },
                    { name: 'cobuyerEmail', label: 'Email', type: 'email' },
                    { name: 'cobuyerPhone', label: 'Phone', type: 'tel' }
                ].map((field, idx) => (
                    <div className="col-md-3" key={idx}>
                        <input type={field.type || 'text'} className="form-control form-control-sm"
                            placeholder={field.label} name={field.name} value={formData[field.name]} 
                            onChange={handleInputChange} />
                    </div>
                ))}
            </div>

            {/* Contact Preferences */}
            <div className="row g-2 mt-2">
                <div className="col-md-4">
                    <label className="form-label">Best Time to Contact</label>
                    <select className="form-select form-select-sm" name="bestTimeToContact"
                        value={formData.bestTimeToContact} onChange={handleInputChange}>
                        <option value="">Select Time</option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Lead Source</label>
                    <select className="form-select form-select-sm" name="leadSource"
                        value={formData.leadSource} onChange={handleInputChange}>
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
            <div className="row g-2 mt-2">
                <div className="col-md-4">
                    <input type="text" className="form-control form-control-sm" placeholder="Property of Interest"
                        name="interestAddress" value={formData.interestAddress} onChange={handleInputChange} />
                </div>
                <div className="col-md-2">
                    <input type="text" className="form-control form-control-sm" placeholder="Min Budget"
                        name="budgetMin" value={formData.budgetMin} onChange={handleInputChange} />
                </div>
                <div className="col-md-2">
                    <input type="text" className="form-control form-control-sm" placeholder="Max Budget"
                        name="budgetMax" value={formData.budgetMax} onChange={handleInputChange} />
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control form-control-sm" placeholder="Preferred Neighborhoods"
                        name="preferredNeighborhoods" value={formData.preferredNeighborhoods} onChange={handleInputChange} />
                </div>
            </div>

            {/* Property Preferences */}
            <div className="row g-2 mt-2">
                <div className="col-md-4">
                    <select className="form-select form-select-sm" name="propertyType" 
                        value={formData.propertyType} onChange={handleInputChange}>
                        <option value="">Select Property Type</option>
                        <option value="singleFamily">Single-Family Home</option>
                        <option value="multiFamily">Multi-Family Home</option>
                        <option value="condo">Condominium</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="land">Land</option>
                        <option value="commercial">Commercial Property</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control form-control-sm" placeholder="Home Features (Pool, Garage, etc.)"
                        name="homeFeatures" value={formData.homeFeatures} onChange={handleInputChange} />
                </div>
                <div className="col-md-2">
                    <input type="number" className="form-control form-control-sm" placeholder="Min Bedrooms"
                        name="minBedrooms" value={formData.minBedrooms} onChange={handleInputChange} />
                </div>
                <div className="col-md-2">
                    <input type="number" className="form-control form-control-sm" placeholder="Min Bathrooms"
                        name="minBathrooms" value={formData.minBathrooms} onChange={handleInputChange} />
                </div>
            </div>

            {/* Financing & Readiness */}
            <div className="row g-2 mt-2">
                <div className="col-md-3">
                    <select className="form-select form-select-sm" name="financingPlan"
                        value={formData.financingPlan} onChange={handleInputChange}>
                        <option value="">Financing Plan</option>
                        <option value="cash">Cash Buyer</option>
                        <option value="preApproved">Pre-Approved Loan</option>
                        <option value="seekingLoan">Seeking Loan Approval</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Down Payment"
                        name="downPayment" value={formData.downPayment} onChange={handleInputChange} />
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Loan Type (FHA, VA, etc.)"
                        name="loanType" value={formData.loanType} onChange={handleInputChange} />
                </div>
            </div>

            {/* Notes Section */}
            <div className="row g-2 mt-2">
                <div className="col-md-12">
                    <textarea className="form-control form-control-sm" rows="3" placeholder="Additional Notes"
                        name="notes" value={formData.notes} onChange={handleInputChange} />
                </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-3">
                <button type="submit" className="btn btn-primary btn-sm px-4 py-1">Submit Lead</button>
            </div>
        </form>
    );
}

export default LeadIntakeForm;
