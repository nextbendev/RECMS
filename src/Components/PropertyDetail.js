import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PropertyContext } from '../contexts/PropertyContext';

function PropertyDetail() {
    const { id } = useParams();
    const { properties } = useContext(PropertyContext);
    const [property, setProperty] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const foundProperty = properties.find(p => p.mlsNumber === id);
        setProperty(foundProperty);
    }, [id, properties]);

    if (!property) {
        return <div>Loading...</div>;
    }

    let imageUrl;
    try {
        imageUrl = require(`../assets/${property.imageUrl}`);
    } catch (err) {
        imageUrl = 'https://via.placeholder.com/150';  // Fallback to placeholder image
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-light btn-sm" onClick={() => navigate(-1)}>&larr; Back</button>
                <Link to={`/edit/${property.mlsNumber}`} className="btn btn-primary btn-sm">Edit Property</Link>
            </div>
            <h1>Property Details</h1>
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="Property" />
                <div className="card-body">
                    <h5 className="card-title">{property.streetAddress}</h5>
                    <p className="card-text">{property.city}, {property.state}</p>
                    <p className="card-text">List Price: ${property.listPrice}</p>
                    <p className="card-text">MLS #: {property.mlsNumber}</p>
                    <p className="card-text">Bedrooms: {property.bedrooms}</p>
                    <p className="card-text">Bathrooms: {property.bathrooms}</p>
                    <p className="card-text">Seller Fee: {property.sellerFee}%</p>
                    <p className="card-text">Buyer Fee: {property.buyerFee}%</p>
                </div>
            </div>
        </div>
    );
}

export default PropertyDetail;
