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

  // Calculate distance between two ZIP codes
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

  // Filter listings based on search term and filters
  const filteredProperties = properties.filter((property) => {
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
      (filters.zipCode === '' ||
        (filters.distance === '' || getDistance(filters.zipCode, zipCode) <= Number(filters.distance))) &&
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

      {/* Additional Filters */}
      <div className="card mb-3 p-2 shadow-sm">
        <div className="row g-1">
          {[
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
        </div>
      </div>

      {/* Properties Display */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {currentProperties.map((property) => (
          <div className="col" key={property.parcelNumber} onClick={() => handlePropertyClick(property.parcelNumber)}>
            <div className="card h-100 shadow-sm" style={{ cursor: 'pointer' }}>
            <img src={require(`../assets/${property.imageUrl}`)} alt="Property" />
              <div className="card-body">
                <h5 className="card-title">{property.streetAddress}</h5>
                <p className="card-text">
                  <strong>{`${property.city}, ${property.state} ${property.zipCode}`}</strong>
                </p>
                <div>
                  List Price: <strong>${property.listPrice}</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      

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
