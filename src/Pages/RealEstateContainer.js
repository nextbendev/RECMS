import React, { useContext} from 'react';
import RealEstateEntries from '../Components/RealEstateEntries'; // Import the RealEstateEntries component
import { PropertyContext } from '../contexts/PropertyContext';

function RealEstateContainer() {
    const { properties } = useContext(PropertyContext);
    

    return (
        <div>
            <RealEstateEntries properties={properties} />
        </div>
    );
}

export default RealEstateContainer;
