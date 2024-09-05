import React, { useState } from 'react';
import '../Stylesheets/Form.css';

function EndUser() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        role: 'contact',
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
            <div className="col-md-2 mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" name="lastName" value={formData.name} onChange={handleInputChange} required />
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
                <label htmlFor="role" className="form-label">Role</label>
                <select className="form-control" id="role" name="role" value={formData.role} onChange={handleInputChange} required>
                    <option value="contact">Contact</option>
                    <option value="prospect">Prospect</option>
                </select>
            </div>
        </div>
    
        <div className="row mb-3">
            <div className="col-md-2 mb-3">
                <label htmlFor="mailAddress" className="form-label">Mailing Address</label>
                <input type="text" className="form-control" id="mailAddress" name="mailAddress" value={formData.mailAddress} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="interestAddress" className="form-label">Address of Interest</label>
                <input type="text" className="form-control" id="interestAddress" name="interestAddress" value={formData.interestAddress} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="budget" className="form-label">Budget</label>
                <input type="text" className="form-control" id="budget" name="budget" value={formData.budget} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                <input type="number" className="form-control" id="bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="Bathrooms" className="form-label">Bathrooms</label>
                <input type="number" className="form-control" id="Bathrooms" name="Bathrooms" value={formData.Bathrooms} onChange={handleInputChange} />
            </div>
        </div>
    
        <div className="row mb-3">
            <div className="col-md-2 mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="wantsNeeds" className="form-label">Wants / Needs</label>
                <input type="text" className="form-control" id="wantsNeeds" name="wantsNeeds" value={formData.wantsNeeds} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="propertyType" className="form-label">Property Type</label>
                <input type="text" className="form-control" id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="preferredContactMethod" className="form-label">Preferred Contact Method</label>
                <select className="form-control" id="preferredContactMethod" name="preferredContactMethod" value={formData.preferredContactMethod} onChange={handleInputChange}>
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="text">Text</option>
                </select>
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="offer" className="form-label">Offer Amount</label>
                <input type="text" className="form-control" id="offer" name="offer" value={formData.offer} onChange={handleInputChange} />
            </div>
        </div>
    
        <div className="row mb-3">
            <div className="col-md-2 mb-3">
                <label htmlFor="dueDiligence" className="form-label">Due Diligence</label>
                <input type="text" className="form-control" id="dueDiligence" name="dueDiligence" value={formData.dueDiligence} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="daysForClosing" className="form-label">Days For Closing</label>
                <input type="number" className="form-control" id="daysForClosing" name="daysForClosing" value={formData.daysForClosing} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="titleCompany" className="form-label">Title Company</label>
                <input type="text" className="form-control" id="titleCompany" name="titleCompany" value={formData.titleCompany} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="escrowAmount" className="form-label">Escrow Amount</label>
                <input type="text" className="form-control" id="escrowAmount" name="escrowAmount" value={formData.escrowAmount} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="paymentType" className="form-label">Payment Type</label>
                <input type="text" className="form-control" id="paymentType" name="paymentType" value={formData.paymentType} onChange={handleInputChange} />
            </div>
        </div>
    
        <div className="row mb-3">
            <div className="col-md-2 mb-3">
                <label htmlFor="financeOption" className="form-label">Finance Option</label>
                <input type="text" className="form-control" id="financeOption" name="financeOption" value={formData.financeOption} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="futureUse" className="form-label">Future Use</label>
                <input type="text" className="form-control" id="futureUse" name="futureUse" value={formData.futureUse} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="commission" className="form-label">Commission</label>
                <input type="number" className="form-control" id="commission" name="commission" value={formData.commission} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="sellerA" className="form-label">Seller A Email</label>
                <input type="email" className="form-control" id="sellerA" name="sellerA" value={formData.sellerA} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="sellerB" className="form-label">Seller B Email</label>
                <input type="email" className="form-control" id="sellerB" name="sellerB" value={formData.sellerB} onChange={handleInputChange} />
            </div>
        </div>
    
        <div className="row mb-3">
            <div className="col-md-2 mb-3">
                <label htmlFor="time" className="form-label">Time Needed</label>
                <input type="number" className="form-control" id="time" name="time" value={formData.time} onChange={handleInputChange} />
            </div>
            <div className="col-md-2 mb-3">
                <label htmlFor="term" className="form-label">Contract Expiration</label>
                <input type="date" className="form-control" id="term" name="term" value={formData.term} onChange={handleInputChange} />
            </div>
        </div>
    
        <div className="row mb-3">
            <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary w-50">Submit</button>
            </div>
        </div>
    </form>
    


    );
}

export default EndUser;
