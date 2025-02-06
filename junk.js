import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import zipcodes from 'zipcodes';

function RealEstateEntries({ properties, pageTitle }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        zipCode: '',
        distance: '',
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

    // Function to calculate distance between two ZIP codes
    const getDistance = (zip1, zip2) => {
        if (!zip1 || !zip2) return Infinity;

        const location1 = zipcodes.lookup(zip1);
        const location2 = zipcodes.lookup(zip2);

        if (!location1 || !location2) return Infinity;

        const R = 3958.8; // Radius of Earth in miles
        const lat1 = (location1.latitude * Math.PI) / 180;
        const lon1 = (location1.longitude * Math.PI) / 180;
        const lat2 = (location2.latitude * Math.PI) / 180;
        const lon2 = (location2.longitude * Math.PI) / 180;

        const dLat = lat2 - lat1;
        const dLon = lon2 - lon1;
        const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c; // Distance in miles
    };

    // Handle filter input changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    // Filter listings based on search term and distance
    const filteredProperties = properties.filter((property) => {
        const { streetAddress, parcelNumber, listPrice, zipCode } = property;

        const matchesSearchTerm =
            streetAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
            parcelNumber.toString().includes(searchTerm) ||
            listPrice.toString().includes(searchTerm);

        const matchesDistance =
            filters.zipCode === '' ||
            filters.distance === '' ||
            getDistance(filters.zipCode, zipCode) <= Number(filters.distance);

        return matchesSearchTerm && matchesDistance;
    });

    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handlePropertyClick = (parcelNumber) => {
        navigate(`/property/${parcelNumber}`);
    };

    return (
        <div className="container mt-3">
            <h1 className="mb-4">{pageTitle}</h1>

            {/* Search and Filters */}
            <div className="row mb-2">
                <div className="col-md-6 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Address, MLS Number..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="col-md-3 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ZIP Code"
                        name="zipCode"
                        value={filters.zipCode}
                        onChange={handleFilterChange}
                    />
                </div>
                <div className="col-md-3 mb-2">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Distance (miles)"
                        name="distance"
                        value={filters.distance}
                        onChange={handleFilterChange}
                    />
                </div>
            </div>

            {/* Properties Display */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {currentProperties.map((property) => (
                    <div className="col" key={property.parcelNumber} onClick={() => handlePropertyClick(property.parcelNumber)}>
                        <div className="card h-100 shadow-sm" style={{ cursor: 'pointer' }}>
                            <img
                                src={property.imageUrl || 'https://via.placeholder.com/150'}
                                className="card-img-top"
                                alt={property.streetAddress}
                                style={{ height: '180px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{property.streetAddress}</h5>
                                <p className="card-text"><strong>{`${property.city}, ${property.state} ${property.zipCode}`}</strong></p>
                                <div className="row">
                                    <div className="col-6">
                                        <div>Price:</div>
                                        <div><strong>${property.listPrice}</strong></div>
                                    </div>
                                    <div className="col-6">
                                        <div>MLS #:</div>
                                        <div><strong>{property.parcelNumber}</strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProperties.length === 0 && <div className="text-center mt-4">No properties found.</div>}

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
