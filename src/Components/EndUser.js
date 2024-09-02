import React, { useState } from 'react';
import '../Stylesheets/Form.css';

function EndUser() {
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
        preferredContactMethod: '',
        offer: '',
        dueDiligence: '',
        daysForClosing: '',
        titleCompany: '',
        escrowAmount: '',
        paymentType: '',
        financeOption: '',
        futureUse: '',
        wantsNeeds: '',
        commission: '',
        sellerA: '',
        sellerB: '',
        time: '',
        term: '',
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (name === 'role' && value !== 'buyer') {
            setFormData(prevState => ({
                ...prevState,
                role: value,
                subCat: '' // Reset subCat to null when role is not 'buyer'
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        // Add logic to process or validate form data
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="preferredContactMethod" className="form-label">Preferred Contact Method</label>
                    <select className="form-control" id="preferredContactMethod" name="preferredContactMethod" value={formData.preferredContactMethod} onChange={handleInputChange} required>
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                        <option value="text">Text</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label">Role</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="role" id="generic" value="generic" checked={formData.role === 'generic'} onChange={handleInputChange} />
                        <label className="form-check-label" htmlFor="generic">Generic</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="role" id="seller" value="seller" checked={formData.role === 'seller'} onChange={handleInputChange} />
                        <label className="form-check-label" htmlFor="seller">Seller</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="role" id="buyer" value="buyer" checked={formData.role === 'buyer'} onChange={handleInputChange} />
                        <label className="form-check-label" htmlFor="buyer">Buyer</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="role" id="investor" value="investor" checked={formData.role === 'investor'} onChange={handleInputChange} />
                        <label className="form-check-label" htmlFor="investor">Investor</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="role" id="prospect" value="prospect" checked={formData.role === 'prospect'} onChange={handleInputChange} />
                        <label className="form-check-label" htmlFor="prospect">Prospect</label>
                    </div>
                </div>
            </div>


            {formData.role === 'prospect' && (
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="mailAddress" className="form-label">Mailing Address</label>
                        <input type="text" className="form-control" id="mailAddress" name="mailAddress" value={formData.mailAddress} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="interestAddress" className="form-label">Address of Interest</label>
                        <input type="text" className="form-control" id="interestAddress" name="interestAddress" value={formData.interestAddress} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="leadBudget" className="form-label">Budget</label>
                        <input type="text" className="form-control" id="leadBudget" name="leadBudget" value={formData.leadBudget} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="leadBedrooms" className="form-label">Bedrooms</label>
                        <input type="number" className="form-control" id="leadBedrooms" name="leadBedrooms" value={formData.leadBedrooms} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="leadBathrooms" className="form-label">Bathrooms</label>
                        <input type="number" className="form-control" id="leadBathrooms" name="leadBathrooms" value={formData.leadBathrooms} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="leadLocation" className="form-label">Preferred Location</label>
                        <input type="text" className="form-control" id="leadLocation" name="leadLocation" value={formData.leadLocation} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="leadPropertyType" className="form-label">Property Type</label>
                        <select className="form-control" id="leadPropertyType" name="leadPropertyType" multiple value={formData.leadPropertyType} onChange={handleInputChange}>
                            <option value="commercial">Commercial</option>
                            <option value="residential">Residential</option>
                            <option value="land">Land</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="leadWantsNeeds" className="form-label">Specific Wants/Needs</label>
                        <textarea className="form-control" id="leadWantsNeeds" name="leadWantsNeeds" value={formData.leadWantsNeeds} onChange={handleInputChange}></textarea>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="timeFrame" className="form-label">Time Frame for Purchase</label>
                        <input type="text" className="form-control" id="timeFrame" name="timeFrame" value={formData.timeFrame} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="financingStatus" className="form-label">Financing Status</label>
                        <select className="form-control" id="financingStatus" name="financingStatus" value={formData.financingStatus} onChange={handleInputChange}>
                            <option value="pre-approved">Pre-approved</option>
                            <option value="not approved">Not approved</option>
                            <option value="cash buyer">Cash Buyer</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="additionalNotes" className="form-label">Additional Notes</label>
                        <textarea className="form-control" id="additionalNotes" name="additionalNotes" value={formData.additionalNotes} onChange={handleInputChange}></textarea>
                    </div>
                </div>
            )}


            {formData.role === 'buyer' && (
                <div className="row mb-3">
                    {/* <div className="col-md-6">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="subCat" id="offer" value="offer" checked={formData.subCat === 'offer'} onChange={handleInputChange} />
                            <label className="form-check-label" htmlFor="offer">Offer</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="subCat" id="searching" value="searching" checked={formData.subCat === 'searching'} onChange={handleInputChange} />
                            <label className="form-check-label" htmlFor="searching">Searching</label>
                        </div>
                    </div> */}
                
                    <div className="col-md-6">
                        <label htmlFor="mailAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="mailAddress" name="mailAddress" value={formData.mailAddress} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name Property Will Be Titled In</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="offer" className="form-label">Offer Amount</label>
                        <input type="text" className="form-control" id="offer" name="offer" value={formData.offer} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="dueDiligence" className="form-label">Due Diligence Period</label>
                        <input type="text" className="form-control" id="dueDiligence" name="dueDiligence" value={formData.dueDiligence} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="daysForClosing" className="form-label">Days For Closing</label>
                        <input type="number" className="form-control" id="daysForClosing" name="daysForClosing" value={formData.daysForClosing} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="titleCompany" className="form-label">Title Company</label>
                        <input type="text" className="form-control" id="titleCompany" name="titleCompany" value={formData.titleCompany} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="escrowAmount" className="form-label">Escrow Amount</label>
                        <input type="text" className="form-control" id="escrowAmount" name="escrowAmount" value={formData.escrowAmount} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="paymentType" className="form-label">Payment Type</label>
                        <input type="text" className="form-control" id="paymentType" name="paymentType" value={formData.paymentType} onChange={handleInputChange} />
                    </div>
                </div>
            )}

            {formData.subCat === 'searching' && (
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="interestAddress" className="form-label">Address of interest</label>
                        <input type="text" className="form-control" id="interestAddress" name="interestAddress" value={formData.interestAddress} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="budget" className="form-label">Budget</label>
                        <input type="text" className="form-control" id="budget" name="budget" value={formData.budget} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                        <input type="number" className="form-control" id="bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Bathrooms" className="form-label">Bathrooms</label>
                        <input type="number" className="form-control" id="Bathrooms" name="Bathrooms" value={formData.Bathrooms} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="wantsNeeds" className="form-label">Wants / Needs</label>
                        <input type="text" className="form-control" id="wantsNeeds" name="wantsNeeds" value={formData.wantsNeeds} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="time" className="form-label">Time Needed</label>
                        <input type="number" className="form-control" id="time" name="time" required onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="propertyType" className="form-label">Property Type</label>
                        <select className="form-control" id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleInputChange}>
                            <option value="commercial">Commercial</option>
                            <option value="residential">Residential</option>
                            <option value="land">Land</option>
                        </select>
                        <label htmlFor="additionalNotes" className="form-label">Additional Notes</label>
                        <textarea className="form-control" id="additionalNotes" name="additionalNotes" value={formData.additionalNotes} onChange={handleInputChange}></textarea>
                    </div>
                </div>
            )}

            {formData.role === 'investor' && (
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="futureUse" className="form-label">Future Use</label>
                        <input type="text" className="form-control" id="futureUse" name="futureUse" value={formData.futureUse} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="budget" className="form-label">Budget</label>
                        <input type="text" className="form-control" id="budget" name="budget" value={formData.budget} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="wantsNeeds" className="form-label">Wants / Needs</label>
                        <input type="text" className="form-control" id="wantsNeeds" name="wantsNeeds" value={formData.wantsNeeds} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="propertyType" className="form-label">Property Type</label>
                        <select className="form-control" id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleInputChange}>
                            <option value="commercial">Commercial</option>
                            <option value="residential">Residential</option>
                            <option value="land">Land</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="time" className="form-label">Time Needed</label>
                        <input type="text" className="form-control" id="time" name="time" required onChange={handleInputChange} />
                    </div>
                </div>
            )}

            {formData.role === 'seller' && (
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="interestAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="interestAddress" name="interestAddress" value={formData.interestAddress} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="budget" className="form-label">Sale Price</label>
                        <input type="text" className="form-control" id="budget" name="budget" value={formData.budget} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="commission" className="form-label">Commission</label>
                        <input type="number" className="form-control" id="commission" name="commission" value={formData.commission} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="term" className="form-label">Contract Expiration</label>
                        <input type="date" className="form-control" id="term" name="term" value={formData.term} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="sellerA" className="form-label">Seller A Email</label>
                        <input type="email" className="form-control" id="sellerA" name="sellerA" value={formData.sellerA} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="sellerB" className="form-label">Seller B Email</label>
                        <input type="email" className="form-control" id="sellerB" name="sellerB" value={formData.sellerB} onChange={handleInputChange} />
                    </div>
                </div>

            )}

            {formData.role === 'generic' && (
                <div className="row mb-3">
                {/* Loop through each input field, grouping them in a structured and responsive layout */}
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="interestAddress" className="form-label">Interest Address</label>
                    <input type="text" className="form-control" id="interestAddress" name="interestAddress" value={formData.interestAddress} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="budget" className="form-label">Budget</label>
                    <input type="text" className="form-control" id="budget" name="budget" value={formData.budget} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                    <input type="number" className="form-control" id="bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="Bathrooms" className="form-label">Bathrooms</label>
                    <input type="number" className="form-control" id="Bathrooms" name="Bathrooms" value={formData.Bathrooms} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="propertyType" className="form-label">Property Type</label>
                    <input type="text" className="form-control" id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="wantsNeeds" className="form-label">Wants/Needs</label>
                    <textarea className="form-control" id="wantsNeeds" name="wantsNeeds" value={formData.wantsNeeds} onChange={handleInputChange}></textarea>
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="offer" className="form-label">Offer Amount</label>
                    <input type="text" className="form-control" id="offer" name="offer" value={formData.offer} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="dueDiligence" className="form-label">Due Diligence Period</label>
                    <input type="text" className="form-control" id="dueDiligence" name="dueDiligence" value={formData.dueDiligence} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="daysForClosing" className="form-label">Days for Closing</label>
                    <input type="number" className="form-control" id="daysForClosing" name="daysForClosing" value={formData.daysForClosing} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="titleCompany" className="form-label">Title Company</label>
                    <input type="text" className="form-control" id="titleCompany" name="titleCompany" value={formData.titleCompany} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="escrowAmount" className="form-label">Escrow Amount</label>
                    <input type="text" className="form-control" id="escrowAmount" name="escrowAmount" value={formData.escrowAmount} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="paymentType" className="form-label">Payment Type</label>
                    <input type="text" className="form-control" id="paymentType" name="paymentType" value={formData.paymentType} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="financeOption" className="form-label">Finance Option</label>
                    <input type="text" className="form-control" id="financeOption" name="financeOption" value={formData.financeOption} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="futureUse" className="form-label">Future Use</label>
                    <input type="text" className="form-control" id="futureUse" name="futureUse" value={formData.futureUse} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="commission" className="form-label">Commission</label>
                    <input type="number" className="form-control" id="commission" name="commission" value={formData.commission} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="sellerA" className="form-label">Seller A Email</label>
                    <input type="email" className="form-control" id="sellerA" name="sellerA" value={formData.sellerA} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="sellerB" className="form-label">Seller B Email</label>
                    <input type="email" className="form-control" id="sellerB" name="sellerB" value={formData.sellerB} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="term" className="form-label">Term</label>
                    <input type="text" className="form-control" id="term" name="term" value={formData.term} onChange={handleInputChange} />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <label htmlFor="time" className="form-label">Time</label>
                    <input type="number" className="form-control" id="time" name="time" value={formData.time} onChange={handleInputChange} />
                </div>
            </div>
            
            )}



            {/* <div className="row mb-3">
                <div className="col-md-12">
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </div>
            </div> */}
        </form>
    );
}

export default EndUser;
