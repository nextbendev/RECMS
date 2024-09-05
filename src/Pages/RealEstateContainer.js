import React, { useContext } from 'react';
import RealEstateEntries from '../Components/RealEstateEntries';
import { PropertyContext } from '../contexts/PropertyContext';

function RealEstateContainer({ creatorId }) {
    const { properties } = useContext(PropertyContext);

    // Filter properties by creatorId if provided, else show all
    const filteredProperties = creatorId 
        ? properties.filter(property => property.creatorID === creatorId)
        : properties;

    return (
        <div>
            <RealEstateEntries properties={filteredProperties} />
        </div>
    );
}

export default RealEstateContainer;
