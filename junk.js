import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RealEstateEntries({ properties, pageTitle }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const propertiesPerPage = 12;
    const navigate = useNavigate();
    // Filter properties based on the search term
    const filteredProperties = properties.filter(property => {
        const { streetAddress, parcelNumber, listPrice, bedrooms, bathrooms, zipCode } = property;
        return (
            streetAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
            parcelNumber.toString().includes(searchTerm) ||
            listPrice.toString().includes(searchTerm) ||
            bedrooms.toString().includes(searchTerm) ||
            bathrooms.toString().includes(searchTerm) ||
            (zipCode && zipCode.toString().includes(searchTerm))
        );
    });

    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

    // Fetch properties based on the current page
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    // Function to change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Function to handle property click
    const handlePropertyClick = (parcelNumber) => {
        navigate(`/property/${parcelNumber}`);
    };

    return (
        <div className="container mt-3">
            <div className="row mb-3">
            <div>
                <h1>{pageTitle}</h1>
            </div>
                <div className="col-12">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Address, MLS Number, Price, Bedrooms, Bathrooms, Zip Code..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {currentProperties.map(property => {
                    let imageUrl;
                    try {
                        // Try to load the image dynamically
                        imageUrl = require(`../assets/${property.imageUrl}`);
                    } catch (err) {
                        // Fallback to a placeholder image if the above fails
                        imageUrl = 'https://via.placeholder.com/150';
                    }

                    return (
                        <div className="col" key={property.parcelNumber} onClick={() => handlePropertyClick(property.parcelNumber)}>
                            <div className="card h-100" style={{ cursor: 'pointer' }}>
                                <img 
                                    src={imageUrl} 
                                    className="card-img-top" 
                                    alt={`${property.streetAddress}`} 
                                    style={{ height: '180px', objectFit: 'cover' }} 
                                />
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
                                            <div><strong>{property.parcelNumber}</strong></div>
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
                    );
                })}
            </div>
            
            {filteredProperties.length === 0 && (
                <div className="text-center mt-4">No properties found.</div>
            )}

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
