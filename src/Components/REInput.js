import React, { useState } from 'react';
import '../Stylesheets/Form.css';

// Helper function to add months to the current date
const addMonths = (months) => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + months);
    return currentDate.toISOString().split('T')[0]; // Returns in 'YYYY-MM-DD' format
};

function REInput() {
    const [listing, setListing] = useState({
        firstName: '', lastName: '', phone: '', email: '',
        propertyType: 'null', propertySubtype: 'null',
        lotAcres: '', titleCompany: '', streetAddress: '',
        city: '', state: '', zipCode: '', bedrooms: '',
        bathrooms: '', halfBathrooms: '', contractLength: '',
        listingExpires: '', listPrice: '', sellerFee: '',
        parcelNumber: '', listingLink: '', mlsNumber: '', 
        status: '', propertyDescription: '',
        mailAddress: '',
        mailCity: '',
        mailSt: '',
        mailZip: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setListing({ ...listing, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(listing);
    };

    const handleListingExpiresChange = (months) => {
        setListing({
            ...listing,
            listingExpires: addMonths(months),
            contractLength: months.toString(),
        });
    };

    const handleCustomDateChange = (e) => {
        setListing({
            ...listing,
            listingExpires: e.target.value,
            contractLength: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="container bg-light shadow-sm rounded p-3">
            {/* Basic Info */}
            <div className="row g-2">
                {[
                    { name: 'firstName', label: 'First Name' },
                    { name: 'lastName', label: 'Last Name' },
                    { name: 'phone', label: 'Phone', type: 'tel' },
                    { name: 'email', label: 'Email', type: 'email' }
                ].map((field, idx) => (
                    <div className="col-md-3" key={idx}>
                        <input type={field.type || 'text'} className="form-control form-control-sm" placeholder={field.label}
                            name={field.name} value={listing[field.name]} onChange={handleChange} required />
                    </div>
                ))}
            </div>

            {/* Location */}
            <div className="row g-2 mt-2">
                {[
                    { name: 'streetAddress', label: 'Listing Street' },
                    { name: 'city', label: 'City' },
                    { name: 'state', label: 'State' },
                    { name: 'zipCode', label: 'Zip Code' }
                ].map((field, idx) => (
                    <div className="col-md-3" key={idx}>
                        <input type="text" className="form-control form-control-sm" placeholder={field.label}
                            name={field.name} value={listing[field.name]} onChange={handleChange} />
                    </div>
                ))}
            </div>

            <div className="row g-2 mt-2">
                {[
                    { name: 'mailAddress', label: 'Mailing Street ' },
                    { name: 'mailCity', label: 'Mailing City' },
                    { name: 'mailState', label: 'Mailing State' },
                    { name: 'mailZipCode', label: 'Mailing Zip Code' }
                ].map((field, idx) => (
                    <div className="col-md-3" key={idx}>
                        <input type="text" className="form-control form-control-sm" placeholder={field.label}
                            name={field.name} value={listing[field.name]} onChange={handleChange} />
                    </div>
                ))}
            </div>
            {/* Property Type & Subtype */}
            <div className="row g-2 mt-2">
                <div className="col-md-3">
                    <label className="form-label">Property Type</label>
                    <select className="form-select form-select-sm" name="propertyType" value={listing.propertyType} onChange={handleChange} required>
                        <option value="null">Property Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Property Subtype</label>
                    <select className="form-select form-select-sm" name="propertySubtype" value={listing.propertySubtype} onChange={handleChange} required>
                        <option value="null">Property Subtype</option>
                        {listing.propertyType === 'commercial' && (
                            <>
                                <option value="office">Office</option>
                                <option value="retail">Retail</option>
                                <option value="industrial">Industrial</option>
                                <option value="multifamily">Multifamily</option>
                                <option value="specialPurpose">Special Purpose</option>
                            </>
                        )}
                        {listing.propertyType === 'residential' && (
                            <>
                                <option value="singleFamilyHome">Single-Family Home</option>
                                <option value="multiFamilyHome">Multi-Family Home</option>
                                <option value="condominium">Condominium</option>
                                <option value="townhouse">Townhouse</option>
                                <option value="cooperative">Co-op</option>
                                <option value="modularHome">Modular Home</option>
                                <option value="mobileHome">Mobile Home</option>
                            </>
                        )}
                        {listing.propertyType === 'land' && (
                            <>
                                <option value="residentialLand">Residential Land</option>
                                <option value="commercialLand">Commercial Land</option>
                                <option value="agriculturalLand">Agricultural Land</option>
                                <option value="industrialLand">Industrial Land</option>
                                <option value="recreationalLand">Recreational Land</option>
                                <option value="undevelopedLand">Undeveloped Land</option>
                            </>
                        )}
                    </select>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Zoning</label>
                    <select className="form-select form-select-sm" name="zoning" value={listing.zoning} onChange={handleChange} required>
                        <option value="">Select Zoning</option>
                        <optgroup label="Residential Zoning">
                            <option value="R1">R1 - Single-Family Residential</option>
                            <option value="R2">R2 - Multi-Family Residential</option>
                            <option value="R3">R3 - High-Density Residential</option>
                        </optgroup>
                        <optgroup label="Commercial Zoning">
                            <option value="C1">C1 - Neighborhood Commercial</option>
                            <option value="C2">C2 - General Commercial</option>
                            <option value="C3">C3 - Heavy Commercial</option>
                        </optgroup>
                        <optgroup label="Industrial Zoning">
                            <option value="I1">I1 - Light Industrial</option>
                            <option value="I2">I2 - General Industrial</option>
                            <option value="I3">I3 - Heavy Industrial</option>
                        </optgroup>
                        <optgroup label="Agricultural Zoning">
                            <option value="A1">A1 - Agricultural</option>
                            <option value="A2">A2 - Rural Agricultural</option>
                        </optgroup>
                        <optgroup label="Mixed Use">
                            <option value="MU">MU - Mixed Use</option>
                            <option value="PUD">PUD - Planned Unit Development</option>
                        </optgroup>
                    </select>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Status</label>
                    <select className="form-select form-select-sm" name="status" value={listing.status} onChange={handleChange} required>
                        <option value="null">Status</option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="sold">Sold</option>
                        <option value="expired">Expired</option>
                    </select>
                </div>
            </div>

            {/* Pricing & MLS Number */}
            <div className="row g-2 mt-2">
                {[
                    { name: 'listPrice', label: 'List Price', type: 'number' },
                    { name: 'sellerFee', label: "Buyer's Side Comp", type: 'text' },
                    { name: 'parcelNumber', label: 'Parcel Number', type: 'text' },
                    { name: 'mlsNumber', label: 'MLS Number', type: 'text' }
                ].map((field, idx) => (
                    <div className="col-md-3" key={idx}>
                        <input type={field.type} className="form-control form-control-sm" placeholder={field.label}
                            name={field.name} value={listing[field.name]} onChange={handleChange} />
                    </div>
                ))}
            </div>
            {/* Contract Length & Expiration */}
            <div className="row g-2 mt-2">
                <div className="col-md-6">
                    <label className="form-label">Contract Length</label>
                    <div className="d-flex justify-content-start gap-3">
                        {['3', '6', '12'].map((months) => (
                            <div className="form-check" key={months}>
                                <input type="radio" className="form-check-input" id={`expiresIn${months}Months`}
                                    name="contractLength" value={months} checked={listing.contractLength === months}
                                    onChange={() => handleListingExpiresChange(months)} />
                                <label htmlFor={`expiresIn${months}Months`} className="form-check-label ms-1">
                                    {months} Months
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Expiration Date</label>
                    <input type="date" className="form-control form-control-sm" name="listingExpires"
                        value={listing.listingExpires} onChange={handleCustomDateChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Title Company</label>
                    <input type="text" className="form-control form-control-sm" placeholder="Title Company"
                        name="titleCompany" value={listing.titleCompany} onChange={handleChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Listing Link</label>
                    <input type="text" className="form-control form-control-sm" placeholder="Listing Link"
                        name="listingLink" value={listing.listingLink} onChange={handleChange} />
                </div>
                
                
            </div>

            {/* Property Description */}
            <div className="row g-2 mt-2">
                <div className="col-md-12">
                    <label className="form-label">Property Description</label>
                    <textarea className="form-control form-control-sm" rows="3" placeholder="Enter property details..."
                        name="propertyDescription" value={listing.propertyDescription} onChange={handleChange} />
                </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-3">
                <button type="submit" className="btn btn-primary btn-sm px-4 py-1">Submit</button>
            </div>
        </form>
    );
}

export default REInput;
