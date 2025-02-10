import React, { useState } from 'react';
import '../Stylesheets/Form.css';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        role: 'contact',
        subCat: '',
        mailAddress: '',
        mailCity: '',
        mailSt: '',
        mailZip: '',
        interestAddress: '',
        budget: '',
        bedrooms: '',
        bathrooms: '',
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
        additionalNotes: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'role' && value !== 'buyer') {
            setFormData(prevState => ({
                ...prevState,
                role: value,
                dueDiligence: '',
                daysForClosing: '',
                titleCompany: '',
                escrowAmount: '',
                paymentType: '',
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
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            {/* Basic Info */}
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
                    <label htmlFor="role" className="form-label">Role</label>
                    <select className="form-control" id="role" name="role" value={formData.role} onChange={handleInputChange} required>
                        <option value="contact">Contact</option>
                        <option value="prospect">Prospect</option>
                        <option value="buyer">Buyer</option>
                    </select>
                </div>
            </div>

            {/* Address Fields */}
            <div className="row mb-3">
                <div className="col-md-2 mb-3">
                    <label htmlFor="mailAddress" className="form-label">Mailing Address</label>
                    <input type="text" className="form-control" id="mailAddress" name="mailAddress" value={formData.mailAddress} onChange={handleInputChange} />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="mailCity" className="form-label">Mailing City</label>
                    <input type="text" className="form-control" id="mailCity" name="mailCity" value={formData.mailCity} onChange={handleInputChange} />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="mailSt" className="form-label">Mailing State</label>
                    <input type="text" className="form-control" id="mailSt" name="mailSt" value={formData.mailSt} onChange={handleInputChange} />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="mailZip" className="form-label">Mailing Zip Code</label>
                    <input type="text" className="form-control" id="mailZip" name="mailZip" value={formData.mailZip} onChange={handleInputChange} />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="interestAddress" className="form-label">Address of Interest</label>
                    <input type="text" className="form-control" id="interestAddress" name="interestAddress" value={formData.interestAddress} onChange={handleInputChange} />
                </div>
            </div>

            
            {/* Conditional Buyer Fields */}
            {formData.role === "buyer" && (
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
            )}

            {/* Property Type */}
            <div className="row mb-3">
                <div className="col-md-4 mb-3">
                    <label htmlFor="propertyType" className="form-label">Property Type</label>
                    <select className="form-control" id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleInputChange}>
                        <option value="">Select Property Type</option>
                        <option value="Single-Family Home">Single-Family Home</option>
                        <option value="Multi-Family Home">Multi-Family Home</option>
                        <option value="Condominium">Condominium</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Land">Land</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                </div>
            </div>

            {/* Notes Section */}
            <div className="row mb-3">
                <div className="col-md-12">
                    <label htmlFor="additionalNotes" className="form-label">Additional Notes</label>
                    <textarea className="form-control" id="additionalNotes" name="additionalNotes" rows="3" value={formData.additionalNotes} onChange={handleInputChange}></textarea>
                </div>
            </div>

            {/* Submit Button */}
            <div className="row mb-3">
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary w-50">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default Contact;
