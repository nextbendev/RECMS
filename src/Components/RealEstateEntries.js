import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RealEstateEntries({ properties, pageTitle }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        zipCode: '',
        bedrooms: '',
        bathrooms: '',
        acreage: '',
        priceMin: '',
        priceMax: '',
        livingSqFt: '',
        totalSqFt: '',
        yearBuilt: '',
        zoning: '',
    });
    const propertiesPerPage = 12;
    const navigate = useNavigate();

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    // Filter properties based on the search term and additional filters
    const filteredProperties = properties.filter(property => {
        const {
            streetAddress,
            parcelNumber,
            listPrice,
            bedrooms,
            bathrooms,
            zipCode,
            acreage,
            livingSqFt,
            totalSqFt,
            yearBuilt,
            zoning,
        } = property;
    
        const price = Number(listPrice.replace(/[^0-9.-]+/g, "")); // Convert price string to number
    
        const matchesSearchTerm =
            streetAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
            parcelNumber.toString().includes(searchTerm);
    
        const matchesFilters =
            (filters.zipCode === '' || zipCode?.toString() === filters.zipCode) &&
            (filters.bedrooms === '' || bedrooms >= Number(filters.bedrooms)) &&
            (filters.bathrooms === '' || bathrooms >= Number(filters.bathrooms)) &&
            (filters.acreage === '' || acreage >= Number(filters.acreage)) &&
            (filters.priceMin === '' || price >= Number(filters.priceMin)) &&
            (filters.priceMax === '' || price <= Number(filters.priceMax)) &&
            (filters.livingSqFt === '' || livingSqFt >= Number(filters.livingSqFt)) &&
            (filters.totalSqFt === '' || totalSqFt >= Number(filters.totalSqFt)) &&
            (filters.yearBuilt === '' || yearBuilt === Number(filters.yearBuilt)) &&
            (filters.zoning === '' || zoning.toLowerCase().includes(filters.zoning.toLowerCase()));
    
        return matchesSearchTerm && matchesFilters;
    });
    

    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handlePropertyClick = (parcelNumber) => {
        navigate(`/property/${parcelNumber}`);
    };

    return (
        <div className="container mt-3">
            <h1 className="mb-4">{pageTitle}</h1>

            {/* Main Search Bar */}
            <div className="row mb-2">
                <div className="col-12">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Address, MLS Number..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Compact Filter Box */}
            <div className="card mb-3 p-2 shadow-sm">
                <div className="row g-1">
                    {[
                        { name: 'zipCode', placeholder: 'Zip' },
                        { name: 'bedrooms', placeholder: 'Beds', type: 'number' },
                        { name: 'bathrooms', placeholder: 'Baths', type: 'number' },
                        { name: 'acreage', placeholder: 'Acreage', type: 'number' },
                        { name: 'priceMin', placeholder: 'Min $', type: 'number' },
                        { name: 'priceMax', placeholder: 'Max $', type: 'number' },
                        { name: 'livingSqFt', placeholder: 'Living SqFt', type: 'number' },
                        { name: 'totalSqFt', placeholder: 'Total SqFt', type: 'number' },
                        { name: 'yearBuilt', placeholder: 'Year Built', type: 'number' },
                        { name: 'zoning', placeholder: 'Zoning' },
                    ].map((filter, index) => (
                        <div className="col-3 col-lg-2" key={index}>
                            <input
                                type={filter.type || 'text'}
                                className="form-control form-control-sm"
                                placeholder={filter.placeholder}
                                name={filter.name}
                                value={filters[filter.name]}
                                onChange={handleFilterChange}
                            />
                        </div>
                    ))}
                    <div className="col-3 col-lg-2">
                        <button className="btn btn-primary btn-sm w-100" onClick={() => setCurrentPage(1)}>
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Properties Display */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {currentProperties.map(property => {
                    let imageUrl;
                    try {
                        imageUrl = require(`../assets/${property.imageUrl}`);
                    } catch (err) {
                        imageUrl = 'https://via.placeholder.com/150';
                    }

                    return (
                        <div className="col" key={property.parcelNumber} onClick={() => handlePropertyClick(property.parcelNumber)}>
                            <div className="card h-100 shadow-sm" style={{ cursor: 'pointer' }}>
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
                                            <div>Bed/ Bath</div>
                                            <div><strong>{property.bedrooms}/{property.bathrooms}</strong></div>
                                        </div>
                                        <div className="col-6">
                                            <div>Buyer Fee:</div>
                                            <div><strong>{property.buyerFee}%</strong></div>
                                        </div>
                                        <div className="col-6">
                                            <div>sqft</div>
                                            <div><strong>{property.totalSqFt}</strong></div>
                                        </div>
                                        <div className="col-6">
                                            <div>More Info</div>
                                            <a
                                                href="https://google.com"
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
                })}
            </div>
            
            {filteredProperties.length === 0 && (
                <div className="text-center mt-4">No properties found.</div>
            )}

            {/* Pagination */}
            <nav aria-label="Page navigation example" className="mt-4">
                <ul className="pagination justify-content-center">
                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default RealEstateEntries;

