import React, { createContext, useState } from 'react';

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
    const [properties, setProperties] = useState([
        {
            imageUrl: 'imgA.jpg',
            streetAddress: '456 Maple Avenue',
            city: 'Sometown',
            state: 'TX',
            listPrice: '750,000',
            mlsNumber: '654321',
            bedrooms: 4,
            bathrooms: 3,
            sellerFee: 2.2,
            buyerFee: 2.7,
            creatorID: 34895734
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '789 Oak Boulevard',
            city: 'Yourtown',
            state: 'FL',
            listPrice: '680,000',
            mlsNumber: '987654',
            bedrooms: 5,
            bathrooms: 4,
            sellerFee: 2.5,
            buyerFee: 3.0,
            creatorID: 34895734
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '123 Pine Street',
            city: 'Bigcity',
            state: 'NY',
            listPrice: '850,000',
            mlsNumber: '556677',
            bedrooms: 6,
            bathrooms: 5,
            sellerFee: 3.0,
            buyerFee: 3.5,
            creatorID: 34895734
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '890 Birch Lane',
            city: 'Oaktown',
            state: 'WA',
            listPrice: '425,000',
            mlsNumber: '332211',
            bedrooms: 3,
            bathrooms: 2,
            sellerFee: 2.0,
            buyerFee: 2.3,
            creatorID: 34895734
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '246 Cedar Road',
            city: 'Greenfield',
            state: 'TX',
            listPrice: '630,000',
            mlsNumber: '114477',
            bedrooms: 4,
            bathrooms: 3,
            sellerFee: 2.3,
            buyerFee: 2.8,
            creatorID: 34895734
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '135 Poplar Court',
            city: 'Northfield',
            state: 'CA',
            listPrice: '950,000',
            mlsNumber: '778899',
            bedrooms: 5,
            bathrooms: 4,
            sellerFee: 3.0,
            buyerFee: 3.2,
            creatorID: 34895734
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '99 Elm Avenue',
            city: 'Woodville',
            state: 'IL',
            listPrice: '720,000',
            mlsNumber: '667788',
            bedrooms: 4,
            bathrooms: 3,
            sellerFee: 2.7,
            buyerFee: 3.1,
            creatorID: 34895734
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '555 Sycamore Lane',
            city: 'Rivertown',
            state: 'GA',
            listPrice: '510,000',
            mlsNumber: '998877',
            bedrooms: 3,
            bathrooms: 2,
            sellerFee: 2.5,
            buyerFee: 2.9,
            creatorID: 34895734
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '888 Redwood Boulevard',
            city: 'Sunnydale',
            state: 'FL',
            listPrice: '630,000',
            mlsNumber: '224466',
            bedrooms: 4,
            bathrooms: 3,
            sellerFee: 2.6,
            buyerFee: 3.0,
            creatorID: 34895734
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '333 Maplewood Drive',
            city: 'Lakeside',
            state: 'MI',
            listPrice: '445,000',
            mlsNumber: '554433',
            bedrooms: 3,
            bathrooms: 2,
            sellerFee: 2.4,
            buyerFee: 2.6,
            creatorID: 34895734
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '777 Birchwood Lane',
            city: 'Mountainview',
            state: 'CO',
            listPrice: '820,000',
            mlsNumber: '123321',
            bedrooms: 5,
            bathrooms: 4,
            sellerFee: 3.1,
            buyerFee: 3.3,
            creatorID: 98274523
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '456 Lakeview Drive',
            city: 'Riverside',
            state: 'WI',
            listPrice: '475,000',
            mlsNumber: '776655',
            bedrooms: 3,
            bathrooms: 2,
            sellerFee: 2.3,
            buyerFee: 2.7,
            creatorID: 98274523
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '989 Oakridge Road',
            city: 'Seaview',
            state: 'ME',
            listPrice: '920,000',
            mlsNumber: '998822',
            bedrooms: 6,
            bathrooms: 5,
            sellerFee: 3.2,
            buyerFee: 3.6,
            creatorID: 98274523
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '223 Pine Hollow Road',
            city: 'Windermere',
            state: 'NV',
            listPrice: '725,000',
            mlsNumber: '664422',
            bedrooms: 4,
            bathrooms: 3,
            sellerFee: 2.6,
            buyerFee: 3.0,
            creatorID: 98274523
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '675 Redwood Street',
            city: 'Brookhaven',
            state: 'KY',
            listPrice: '580,000',
            mlsNumber: '667788',
            bedrooms: 4,
            bathrooms: 3,
            sellerFee: 2.5,
            buyerFee: 2.9,
            creatorID: 98274523
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '149 Willow Road',
            city: 'Sunset Hills',
            state: 'OR',
            listPrice: '890,000',
            mlsNumber: '445566',
            bedrooms: 5,
            bathrooms: 4,
            sellerFee: 3.0,
            buyerFee: 3.5,
            creatorID: 98274523
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '50 Cypress Circle',
            city: 'Bayshore',
            state: 'SC',
            listPrice: '660,000',
            mlsNumber: '112233',
            bedrooms: 4,
            bathrooms: 3,
            sellerFee: 2.4,
            buyerFee: 2.8,
            creatorID: 98274523
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '333 Maple Drive',
            city: 'Hilltop',
            state: 'OK',
            listPrice: '380,000',
            mlsNumber: '556699',
            bedrooms: 3,
            bathrooms: 2,
            sellerFee: 2.0,
            buyerFee: 2.3,
            creatorID: 98274523
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '88 Cedar Circle',
            city: 'Westfield',
            state: 'NJ',
            listPrice: '495,000',
            mlsNumber: '667788',
            bedrooms: 4,
            bathrooms: 3,
            sellerFee: 2.7,
            buyerFee: 3.0,
            creatorID: 98274523
          },
          {
            imageUrl: 'imgA.jpg',
            streetAddress: '1122 Oak Grove Lane',
            city: 'Meadowville',
            state: 'UT',
            listPrice: '615,000',
            mlsNumber: '111222',
            bedrooms: 4,
            bathrooms: 3,
            sellerFee: 2.8,
            buyerFee: 3.2,
            creatorID: 98274523
          }
    ]);

    return (
        <PropertyContext.Provider value={{ properties, setProperties }}>
            {children}
        </PropertyContext.Provider>
    );
};
