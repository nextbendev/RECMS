import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useGlobalState } from '../contexts/GlobalContext';

function PropertyDetail() {
    const { id } = useParams();
    const { state } = useGlobalState(); // ✅ Use global state
    const [property, setProperty] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (state?.properties) {
            const foundProperty = state.properties.find(p => p.parcelNumber === id);
            setProperty(foundProperty);
        }
    }, [id, state?.properties]);

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
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <button className="btn btn-light btn-sm" onClick={() => navigate(-1)}>&larr; Back</button>
                <Link to={`/edit/${property.parcelNumber}`} className="btn btn-primary btn-sm">Edit Property</Link>
            </div>

            <h1>Property Details</h1>

            <div className="card shadow-sm">
                <img src={imageUrl} className="card-img-top" alt="Property" style={{ height: '300px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h5 className="card-title">{property.streetAddress}</h5>
                    <p className="card-text"><strong>{property.city}, {property.state} {property.zipCode}</strong></p>
                    
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <p><strong>List Price:</strong> ${property.listPrice}</p>
                            <p><strong>MLS #:</strong> {property.mlsNumber}</p>
                            <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                            <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
                            <p><strong>Acreage:</strong> {property.acreage} acres</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Living SqFt:</strong> {property.livingSqFt} sqft</p>
                            <p><strong>Total SqFt:</strong> {property.totalSqFt} sqft</p>
                            <p><strong>Year Built:</strong> {property.yearBuilt}</p>
                            <p><strong>Zoning:</strong> {property.zoning}</p>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Buyer Fee:</strong> {property.buyerFee}%</p>
                        </div>
                        <div className="col-md-6">
                            <div>More Info</div>
                            <a
                                href={property.listingLink || "https://google.com"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div><strong>Click Here</strong></div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PropertyDetail;
