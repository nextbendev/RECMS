import React, { createContext, useState } from 'react';

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
    const [properties, setProperties] = useState([
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '123 Elm Street',
                city: 'Anytown',
                state: 'CA',
                listPrice: '500,000',
                mlsNumber: '123456',
                bedrooms: 3,
                bathrooms: 2,
                sellerFee: 2.5,
                buyerFee: 3
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '456 Maple Avenue',
                city: 'Sometown',
                state: 'TX',
                listPrice: '750,000',
                mlsNumber: '654321',
                bedrooms: 4,
                bathrooms: 3,
                sellerFee: 2,
                buyerFee: 2.5
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '789 Oak Boulevard',
                city: 'Yourtown',
                state: 'FL',
                listPrice: '650,000',
                mlsNumber: '789012',
                bedrooms: 5,
                bathrooms: 4,
                sellerFee: 2.8,
                buyerFee: 3.1
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '101 Pine Lane',
                city: 'Laketown',
                state: 'MI',
                listPrice: '300,000',
                mlsNumber: '101112',
                bedrooms: 3,
                bathrooms: 2,
                sellerFee: 1.5,
                buyerFee: 1.5
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '202 Cedar St',
                city: 'Hillside',
                state: 'NJ',
                listPrice: '420,000',
                mlsNumber: '202213',
                bedrooms: 4,
                bathrooms: 2,
                sellerFee: 2.5,
                buyerFee: 2.5
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '303 Redwood Road',
                city: 'Clifftown',
                state: 'CO',
                listPrice: '960,000',
                mlsNumber: '303314',
                bedrooms: 6,
                bathrooms: 5,
                sellerFee: 3,
                buyerFee: 2
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '404 Spruce Way',
                city: 'Rivercity',
                state: 'WA',
                listPrice: '850,000',
                mlsNumber: '404415',
                bedrooms: 4,
                bathrooms: 3,
                sellerFee: 2.2,
                buyerFee: 2.8
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '505 Birch Avenue',
                city: 'Oceanview',
                state: 'CA',
                listPrice: '1,200,000',
                mlsNumber: '505516',
                bedrooms: 5,
                bathrooms: 4,
                sellerFee: 3,
                buyerFee: 3.5
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '606 Aspen Court',
                city: 'Peakville',
                state: 'UT',
                listPrice: '475,000',
                mlsNumber: '606617',
                bedrooms: 3,
                bathrooms: 2,
                sellerFee: 2.5,
                buyerFee: 2
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '707 Elmira Road',
                city: 'Lakehurst',
                state: 'NY',
                listPrice: '530,000',
                mlsNumber: '707718',
                bedrooms: 4,
                bathrooms: 3,
                sellerFee: 2.1,
                buyerFee: 2.6
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '808 Magnolia Blvd',
                city: 'Springfield',
                state: 'IL',
                listPrice: '610,000',
                mlsNumber: '808819',
                bedrooms: 5,
                bathrooms: 4,
                sellerFee: 2.7,
                buyerFee: 3.3
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '909 Willow Way',
                city: 'Ridgemont',
                state: 'VA',
                listPrice: '290,000',
                mlsNumber: '909920',
                bedrooms: 3,
                bathrooms: 2,
                sellerFee: 1.8,
                buyerFee: 1.9
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '1010 Maple Drive',
                city: 'Brookwood',
                state: 'OH',
                listPrice: '375,000',
                mlsNumber: '1011021',
                bedrooms: 3,
                bathrooms: 2,
                sellerFee: 2,
                buyerFee: 2.2
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '1111 Cedar Point Rd',
                city: 'Eastview',
                state: 'GA',
                listPrice: '410,000',
                mlsNumber: '1111122',
                bedrooms: 4,
                bathrooms: 2,
                sellerFee: 2.3,
                buyerFee: 2.5
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '1212 Vine Street',
                city: 'Westend',
                state: 'OR',
                listPrice: '335,000',
                mlsNumber: '121213',
                bedrooms: 3,
                bathrooms: 2,
                sellerFee: 2.5,
                buyerFee: 2
            },
            {
                imageUrl: 'https://via.placeholder.com/150',
                streetAddress: '1313 Oak Lane',
                city: 'Southgate',
                state: 'TX',
                listPrice: '540,000',
                mlsNumber: '131314',
                bedrooms: 5,
                bathrooms: 3,
                sellerFee: 3.5,
                buyerFee: 3
            }
    ]);

    return (
        <PropertyContext.Provider value={{ properties, setProperties }}>
            {children}
        </PropertyContext.Provider>
    );
};
