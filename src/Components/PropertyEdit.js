import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PropertyContext } from '../contexts/PropertyContext';

function PropertyEdit() {
    const { id } = useParams();
    const { properties, setProperties } = useContext(PropertyContext);
    const [formData, setFormData] = useState({
        streetAddress: '',
        city: '',
        state: '',
        listPrice: '',
        parcelNumber: '',
        bedrooms: '',
        bathrooms: '',
        sellerFee: '',
        buyerFee: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Find the property by ID and set it as initial form data
        const property = properties.find(p => p.parcelNumber === id);
        if (property) {
            setFormData(property);
        }
    }, [id, properties]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Update properties context
        const updatedProperties = properties.map(p => p.parcelNumber === id ? { ...formData } : p);
        setProperties(updatedProperties);
        navigate(-1); // Go back to the details page or listings
    };

    return (
        <div className="container">
             <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-light btn-sm" onClick={() => navigate(-1)}>&larr; Back</button>
            </div>
            <h1>Edit Property</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="streetAddress" className="form-label">Street Address</label>
                    <input type="text" className="form-control" id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <input type="text" className="form-control" id="state" name="state" value={formData.state} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="listPrice" className="form-label">List Price</label>
                    <input type="text" className="form-control" id="listPrice" name="listPrice" value={formData.listPrice} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                    <input type="number" className="form-control" id="bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
                    <input type="number" className="form-control" id="bathrooms" name="bathrooms" value={formData.bathrooms} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="sellerFee" className="form-label">Seller Fee (%)</label>
                    <input type="number" step="0.1" className="form-control" id="sellerFee" name="sellerFee" value={formData.sellerFee} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="buyerFee" className="form-label">Buyer Fee (%)</label>
                    <input type="number" step="0.1" className="form-control" id="buyerFee" name="buyerFee" value={formData.buyerFee} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Update Property</button>
            </form>
        </div>
    );
}

export default PropertyEdit;
