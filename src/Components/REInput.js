import React, { useState } from 'react';
import '../Stylesheets/Form.css';

function REInput() {
    const [listing, setListing] = useState({
        streetAddress: '',
        state: '', 
        city: '',
        zipCode: '',
        mlsNumber: '',
        listPrice: '',
        status: '',
        county: '',
        yearBuilt: '',
        lotFront: '',
        listingType: '',
        lotSquareFeet: '',
        lotAcres: '',
        totalSquareFeet: '',
        taxes: '',
        neighborhood: '',
        community: '',
        hoaFee: '',
        zoning: '',
        design: '',
        sewer: '',
        heating: '',
        water: '',
        cooling: '',
        windows: '',
        parkingSpaces: '',
        propertyType: 'residential',
        propertySubtype: '',
        roof: '',
        businessType: '',
        propertyCondition: '',
        directions: '',
        owner: '',
        legalDescription: '',
        financing: '',
        additionalRemarks: '',
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

    return (
        <form onSubmit={handleSubmit} className="container">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="propertyType" className="form-label">Property Type</label>
                    <select className="form-control" id="propertyType" name="propertyType" value={listing.propertyType} onChange={handleChange} required>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="propertySubtype" className="form-label">Subtype</label>
                    {listing.propertyType === 'commercial' && (
                        <select className="form-control" id="propertySubtype" name="propertySubtype" value={listing.propertySubtype} onChange={handleChange} required>
                            <option value="office">Office</option>
                            <option value="retail">Retail</option>
                            <option value="industrial">Industrial</option>
                            <option value="multifamily">Multifamily</option>
                            <option value="specialPurpose">Special Purpose</option>
                        </select>
                    )}
                    {listing.propertyType === 'residential' && (
                        <select className="form-control" id="propertySubtype" name="propertySubtype" value={listing.propertySubtype} onChange={handleChange} required>
                            <option value="singleFamilyHome">Single-Family Home</option>
                            <option value="multiFamilyHome">Multi-Family Home</option>
                            <option value="condominium">Condominium</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="cooperative">Cooperative (Co-op)</option>
                            <option value="modularHome">Modular and Prefabricated Homes</option>
                            <option value="mobileHome">Mobile Homes</option>
                        </select>
                    )}
                    {listing.propertyType === 'land' && (
                        <select className="form-control" id="propertySubtype" name="propertySubtype" value={listing.propertySubtype} onChange={handleChange} required>
                            <option value="residentialLand">Residential Land</option>
                            <option value="commercialLand">Commercial Land</option>
                            <option value="agriculturalLand">Agricultural Land</option>
                            <option value="industrialLand">Industrial Land</option>
                            <option value="recreationalLand">Recreational Land</option>
                            <option value="undevelopedLand">Undeveloped Land</option>
                        </select>
                    )}
                </div>

                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="mlsNumber" className="form-label">MLS Number</label>
                    <input type="text" className="form-control" id="mlsNumber" name="mlsNumber" value={listing.mlsNumber} onChange={handleChange} />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="streetAddress" className="form-label"> Street Address</label>
                    <input type="text" className="form-control" id="streetAddress" name="streetAddress" value={listing.streetAddress} onChange={handleChange} />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name="city" value={listing.city} onChange={handleChange} />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <input type="text" className="form-control" id="state" name="state" value={listing.state} onChange={handleChange} />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="zipCode" className="form-label">Zip Code</label>
                    <input type="text" className="form-control" id="zipCode" name="zipCode" value={listing.zipCode} onChange={handleChange} />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="listPrice" className="form-label">List Price</label>
                    <input type="number" className="form-control" id="listPrice" name="listPrice" value={listing.listPrice} onChange={handleChange} />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="sellerFee" className="form-label">Seller Fee</label>
                    <input type="text" className="form-control" id="sellerFee" name="sellerFee" value={listing.sellerFee} onChange={handleChange} />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="buyerFee" className="form-label">Buyer Fee</label>
                    <input type="number" className="form-control" id="buyerFee" name="buyerFee" value={listing.buyerFee} onChange={handleChange} />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <input type="text" className="form-control" id="status" name="status" value={listing.status} onChange={handleChange} />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="lotSquareFeet" className="form-label">Lot Size (Square Feet)</label>
                    <input type="number" className="form-control" id="lotSquareFeet" name="lotSquareFeet" value={listing.lotSquareFeet} onChange={handleChange} />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="lotAcres" className="form-label">Lot Size (Acres)</label>
                    <input type="number" className="form-control" id="lotAcres" name="lotAcres" value={listing.lotAcres} onChange={handleChange} />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="totalSquareFeet" className="form-label">Total Square Feet</label>
                    <input type="number" className="form-control" id="totalSquareFeet" name="totalSquareFeet" value={listing.totalSquareFeet} onChange={handleChange} />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <label htmlFor="taxes" className="form-label">Taxes</label>
                    <input type="number" className="form-control" id="taxes" name="taxes" value={listing.taxes} onChange={handleChange} />
                </div>
                {/* Continue with more input fields as required, following the same pattern */}
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit Listing</button>
                </div>
            </div>
        </form>


    );
}

export default REInput;
