import React, { useState } from 'react';

function PropertyCard({ property, onClick }) {
    return (
        <div className="card h-100" onClick={() => onClick(property)}>
            <img src={property.imageUrl} className="card-img-top" alt={`View of ${property.streetAddress}`} />
            <div className="card-body">
                <h5 className="card-title">{property.streetAddress}</h5>
                <p className="card-text">{`${property.city}, ${property.state}`}</p>
                <p className="card-text">List Price: ${property.listPrice}</p>
            </div>
        </div>
    );
}

function RealEstateEntries({ properties }) {
    const [selectedProperty, setSelectedProperty] = useState(null);

    const handlePropertyClick = property => {
        setSelectedProperty(property);
    };

    return (
        <div className="container mt-3">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {properties.map(property => (
                    <div className="col" key={property.mlsNumber}>
                        <PropertyCard property={property} onClick={handlePropertyClick} />
                    </div>
                ))}
                {selectedProperty && <PropertyDetail property={selectedProperty} />}
            </div>
        </div>
    );
}

export default RealEstateEntries;
