import React, { useContext } from 'react';
import RealEstateEntries from '../Components/RealEstateEntries';
import { useGlobalState } from '../contexts/GlobalContext';


function RealEstateContainer({ creatorId }) {
    const { state } = useGlobalState();
    const properties = state.properties;
    

    // Filter properties by creatorId if provided, else show all
    const filteredProperties = creatorId 
        ? properties.filter(property => property.creatorID === creatorId)
        : properties;

    // Determine the page title based on whether properties are filtered
    const pageTitle = creatorId ? "My Listings" : "Listings";

    return (
        <div>
            {/* Pass the pageTitle as a prop */}
            <RealEstateEntries 
                properties={filteredProperties} 
                pageTitle={pageTitle} 
            />
        </div>
    );
}

export default RealEstateContainer;
