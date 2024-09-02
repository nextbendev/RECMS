import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function RealEstateEntries({ properties }) {
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 12;  // Adjust this as needed
    const totalPages = Math.ceil(properties.length / propertiesPerPage);
    const navigate = useNavigate();  // Initialize navigate function

    // Fetch properties based on the current page
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

    // Function to change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Function to handle property click
    const handlePropertyClick = (mlsNumber) => {
        navigate(`/property/${mlsNumber}`);  // Navigate to PropertyDetail with the MLS number
    };

    return (
        <div className="container mt-3">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {currentProperties.map(property => (
                    <div className="col" key={property.mlsNumber} onClick={() => handlePropertyClick(property.mlsNumber)}>
                        <div className="card h-100" style={{ cursor: 'pointer' }}>
                            <img src={property.imageUrl} className="card-img-top" alt={`Image of ${property.streetAddress}`} style={{ height: '180px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">{property.streetAddress}</h5>
                                <p className="card-text"><strong>{`${property.city}, ${property.state}`}</strong></p>
                                <div className="row">
                                    <div className="col-6">
                                        <div>List Price:</div>
                                        <div><strong>${property.listPrice}</strong></div>
                                    </div>
                                    <div className="col-6">
                                        <div>MLS #:</div>
                                        <div><strong>{property.mlsNumber}</strong></div>
                                    </div>
                                    <div className="col-6">
                                        <div>Bedrooms:</div>
                                        <div><strong>{property.bedrooms}</strong></div>
                                    </div>
                                    <div className="col-6">
                                        <div>Bathrooms:</div>
                                        <div><strong>{property.bathrooms}</strong></div>
                                    </div>
                                    <div className="col-6">
                                        <div>Seller Fee:</div>
                                        <div><strong>{property.sellerFee}%</strong></div>
                                    </div>
                                    <div className="col-6">
                                        <div>Buyer Fee:</div>
                                        <div><strong>{property.buyerFee}%</strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <nav aria-label="Page navigation example" className="mt-4">
                <ul className="pagination justify-content-center">
                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default RealEstateEntries;
