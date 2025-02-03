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
        firstName: '',        // First Name
        lastName: '',         // Last Name
        phone: '',            // Phone
        email: '',            // Email
        propertyType: 'residential',  // Property Type (default to 'residential')
        propertySubtype: '',  // Subtype
        lotAcres: '',         // Lot Size (Acres)
        titleCompany: '',     // Title Company
        streetAddress: '',    // Street Address
        city: '',             // City
        state: '',            // State
        zipCode: '',          // Zip Code
        bedrooms: '',         // Bedrooms
        bathrooms: '',        // Bathrooms
        halfBathrooms: '',    // Half Bathrooms
        contractLength: '',   // Contract Length (3, 6, or 12 months)
        listingExpires: '',   // Expiration Date (date picker)
        listPrice: '',        // List Price
        sellerFee: '',        // Compensation
        parcelNumber: '',     // Parcel Number
        listingLink: '',
        
      });
      

    const handleChange = (e) => {
        const { name, value } = e.target;
        setListing({ ...listing, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(listing);
        // Submit logic here
    };

    const handleListingExpiresChange = (months) => {
        const expirationDate = addMonths(months);
        setListing({
            ...listing,
            listingExpires: expirationDate,
            contractLength: months.toString(), // Set the selected radio button
        });
    };

    const handleCustomDateChange = (e) => {
        setListing({
            ...listing,
            listingExpires: e.target.value,
            contractLength: '', // Unselect the radio buttons
        });
    };

    

    return (
        <form onSubmit={handleSubmit} className="container">
            <div className="row mb-3">
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={listing.firstName} onChange={handleChange} required />
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={listing.lastName} onChange={handleChange} required />
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" name="phone" value={listing.phone} onChange={handleChange} required />
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={listing.email} onChange={handleChange} required />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="propertyType" className="form-label">Property Type</label>
                    <select className="form-control" id="propertyType" name="propertyType" value={listing.propertyType} onChange={handleChange} required>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="propertySubtype" className="form-label">Subtype</label>
                    <select className="form-control" id="propertySubtype" name="propertySubtype" value={listing.propertySubtype} onChange={handleChange} required>
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
                                <option value="modularHome">Modular and Prefabricated Homes</option>
                                <option value="mobileHome">Mobile Homes</option>
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

                
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="lotAcres" className="form-label">Lot Size (Acres)</label>
                    <input type="number" className="form-control" id="lotAcres" name="lotAcres" value={listing.lotAcres} onChange={handleChange} />
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="titleCompany" className="form-label">Title Company</label>
                    <input type="text" className="form-control" id="titleCompany" name="titleCompany" value={listing.titleCompany} onChange={handleChange} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="streetAddress" className="form-label">Street Address</label>
                    <input type="text" className="form-control" id="streetAddress" name="streetAddress" value={listing.streetAddress} onChange={handleChange} />
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name="city" value={listing.city} onChange={handleChange} />
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <input type="text" className="form-control" id="state" name="state" value={listing.state} onChange={handleChange} />
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="zipCode" className="form-label">Zip Code</label>
                    <input type="text" className="form-control" id="zipCode" name="zipCode" value={listing.zipCode} onChange={handleChange} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                    <input type="number" className="form-control" id="bedrooms" name="bedrooms" value={listing.bedrooms} onChange={handleChange} />
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
                    <input type="number" className="form-control" id="bathrooms" name="bathrooms" value={listing.bathrooms} onChange={handleChange} />
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="halfBathrooms" className="form-label">Half Bathrooms</label>
                    <input type="number" className="form-control" id="halfBathrooms" name="halfBathrooms" value={listing.halfBathrooms} onChange={handleChange} />
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                    <div className="d-flex align-items-center mb-2">
                        <label htmlFor="listingExpires" className="form-label">Contract Length</label>
                        <div className="form-check me-2">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="expiresIn3Months"
                                name="contractLength"
                                value="3"
                                checked={listing.contractLength === '3'}
                                onChange={() => handleListingExpiresChange(3)}
                            />
                            <label htmlFor="expiresIn3Months" className="form-check-label">3</label>
                        </div>
                        <div className="form-check me-2">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="expiresIn6Months"
                                name="contractLength"
                                value="6"
                                checked={listing.contractLength === '6'}
                                onChange={() => handleListingExpiresChange(6)}
                            />
                            <label htmlFor="expiresIn6Months" className="form-check-label">6</label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="expiresIn12Months"
                                name="contractLength"
                                value="12"
                                checked={listing.contractLength === '12'}
                                onChange={() => handleListingExpiresChange(12)}
                            />
                            <label htmlFor="expiresIn12Months" className="form-check-label">12</label>
                        </div>
                    </div>
                    <input
                        type="date"
                        className="form-control"
                        id="listingExpires"
                        name="listingExpires"
                        value={listing.listingExpires}
                        onChange={handleCustomDateChange}
                    />
                </div>   
            </div>

            <div className="row mb-3">
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="listPrice" className="form-label">List Price</label>
                    <input type="number" className="form-control" id="listPrice" name="listPrice" value={listing.listPrice} onChange={handleChange} />
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="sellerFee" className="form-label">Compensation</label>
                    <input type="text" className="form-control" id="sellerFee" name="sellerFee" value={listing.sellerFee} onChange={handleChange} />
                </div>
   
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="parcelNumber" className="form-label">Parcel Number</label>
                    <input type="text" className="form-control" id="parcelNumber" name="parcelNumber" value={listing.parcelNumber} onChange={handleChange} />
                </div>  
                <div className="col-md-4 col-lg-3 mb-3">
                    <label htmlFor="listingLink" className="form-label">Listing Link</label>
                    <input type="text" className="form-control" id="listingLink" name="listingLink" value={listing.listingLink} onChange={handleChange} />
                </div>   
            </div>
            <div className="row mb-3">
                
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">Submit Listing</button>
            </div>
        </form>
    );
}

export default REInput;
