import React, { createContext, useReducer, useContext } from "react";

// Initial State
const initialState = {

  user: {
    userId: "34895734",
    name: "Benjamin Sommerville",
    email: "nextbendev@gmail.com",
    cellPhone: "863-867-5309",
    brokerage: "Advantage Realty #1",
    role: "Admin",
    loggedIn: false,
    profilePicture: "https://placehold.co/150",
    location: "Sebring, FL",
    socialLinks: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
    },
    specializations: ["Luxury Homes", "Investment Properties", "First-Time Buyers"],
    bio: "Helping clients find their dream homes with expert market knowledge.",
    licenseNumber: "FL1234567",
    yearsExperience: 8,
    listings: [], // Filled dynamically
    posts: [],
  },

  users: [
    {
      userId: "1001",
      name: "John Doe",
      email: "john.doe@example.com",
      cellPhone: "123-456-7890",
      brokerage: "Elite Realty Group",
      role: "User",
      loggedIn: false,
      profilePicture: "https://placehold.co/150",
      location: "Miami, FL",
      socialLinks: {
        facebook: "https://facebook.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
      specializations: ["Luxury Homes", "Commercial Real Estate"],
      bio: "Passionate about helping clients make the best real estate decisions.",
      licenseNumber: "FL9876543",
      yearsExperience: 5,
      listings: [],
      posts: [],
    },
    {
      userId: "1002",
      name: "Alice Smith",
      email: "alice.smith@example.com",
      cellPhone: "987-654-3210",
      brokerage: "NextGen Realty",
      role: "SuperUser",
      loggedIn: false,
      profilePicture: "https://placehold.co/150",
      location: "Orlando, FL",
      socialLinks: {
        facebook: "https://facebook.com/alicesmith",
        linkedin: "https://linkedin.com/in/alicesmith",
        twitter: "https://twitter.com/alicesmith",
      },
      specializations: ["Condos", "Vacation Homes"],
      bio: "Your go-to real estate expert in Florida.",
      licenseNumber: "FL1122334",
      yearsExperience: 7,
      listings: [],
      posts: [],
    },
    {
      userId: "1003",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      cellPhone: "555-123-4567",
      brokerage: "Citywide Realty",
      role: "Admin",
      loggedIn: false,
      profilePicture: "https://placehold.co/150",
      location: "Tampa, FL",
      socialLinks: {
        facebook: "https://facebook.com/michaelbrown",
        linkedin: "https://linkedin.com/in/michaelbrown",
        twitter: "https://twitter.com/michaelbrown",
      },
      specializations: ["Residential Properties", "Flipping Houses"],
      bio: "Making homeownership a reality, one deal at a time.",
      licenseNumber: "FL4455667",
      yearsExperience: 6,
      listings: [],
      posts: [],
    },
    {
      userId: "1004",
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      cellPhone: "444-987-6543",
      brokerage: "Dream Homes Realty",
      role: "User",
      loggedIn: false,
      profilePicture: "https://placehold.co/150",
      location: "Jacksonville, FL",
      socialLinks: {
        facebook: "https://facebook.com/sarahjohnson",
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
      },
      specializations: ["First-Time Buyers", "Townhomes"],
      bio: "Helping buyers find the perfect place to call home.",
      licenseNumber: "FL7788991",
      yearsExperience: 4,
      listings: [],
      posts: [],
    },
    {
      userId: "1005",
      name: "David Wilson",
      email: "david.wilson@example.com",
      cellPhone: "777-888-9999",
      brokerage: "Sunshine Realty",
      role: "SuperUser",
      loggedIn: false,
      profilePicture: "https://placehold.co/150",
      location: "Fort Lauderdale, FL",
      socialLinks: {
        facebook: "https://facebook.com/davidwilson",
        linkedin: "https://linkedin.com/in/davidwilson",
        twitter: "https://twitter.com/davidwilson",
      },
      specializations: ["Luxury Waterfront Homes"],
      bio: "Your expert in high-end coastal properties.",
      licenseNumber: "FL9988776",
      yearsExperience: 10,
      listings: [],
      posts: [],
    },
  ],
  contacts: [
    {
      "id": 1,
      "name": "Ewan Campbell",
      "email": "ewan.campbell@example.com",
      "phone": "305-567-8901",
      "mailAddress": "1420 Biscayne Blvd",
      "mailCity": "Miami",
      "mailSt": "FL",
      "mailZip": "33132",
      "role": "buyer",
      "budget": "750000",
      "propertyType": ["Residential"],
      "financingStatus": "Pre-approved",
      "timeFrame": "3 months",
      "tasks": [
        {
          "taskId": 1,
          "status": "open",
          "taskType": "email",
          "taskDescription": "Send listing details to buyer",
          "dueDate": "2024-09-15",
          "urgency": "medium"
        }
      ]
    },
    {
      "id": 2,
      "name": "Isla Ferguson",
      "email": "isla.ferguson@example.com",
      "phone": "407-987-2345",
      "mailAddress": "902 Magnolia Ave",
      "mailCity": "Orlando",
      "mailSt": "FL",
      "mailZip": "32805",
      "role": "prospect",
      "budget": "600000",
      "propertyType": ["Condominium"],
      "wantsNeeds": "Downtown, walkable area",
      "tasks": [
        {
          "taskId": 2,
          "status": "open",
          "taskType": "call",
          "taskDescription": "Schedule property showing",
          "dueDate": "2024-09-16",
          "urgency": "high"
        }
      ]
    },
    {
      "id": 3,
      "name": "Callum MacDonald",
      "email": "callum.macdonald@example.com",
      "phone": "813-678-1111",
      "mailAddress": "651 Sunset Blvd",
      "mailCity": "Tampa",
      "mailSt": "FL",
      "mailZip": "33606",
      "role": "seller",
      "budget": "900000",
      "propertyType": ["Residential"],
      "commission": "5%",
      "titleCompany": "Sunshine Title Services",
      "tasks": [
        {
          "taskId": 3,
          "status": "open",
          "taskType": "appointment",
          "taskDescription": "Meet appraiser for property valuation",
          "dueDate": "2024-09-17",
          "urgency": "medium"
        }
      ]
    },
    {
      "id": 4,
      "name": "Fiona Stewart",
      "email": "fiona.stewart@example.com",
      "phone": "561-789-5678",
      "mailAddress": "212 Seaside Lane",
      "mailCity": "West Palm Beach",
      "mailSt": "FL",
      "mailZip": "33401",
      "role": "investor",
      "budget": "2000000",
      "propertyType": ["Commercial", "Multi-family"],
      "futureUse": "Short-term rentals",
      "tasks": [
        {
          "taskId": 4,
          "status": "open",
          "taskType": "email",
          "taskDescription": "Send market analysis report",
          "dueDate": "2024-09-18",
          "urgency": "low"
        }
      ]
    },
    {
      "id": 5,
      "name": "Gregor Murray",
      "email": "gregor.murray@example.com",
      "phone": "239-654-3210",
      "mailAddress": "100 Gulf Coast Dr",
      "mailCity": "Naples",
      "mailSt": "FL",
      "mailZip": "34102",
      "role": "lead",
      "budget": "1250000",
      "propertyType": ["Luxury Residential"],
      "wantsNeeds": "Ocean view, modern design",
      "tasks": [
        {
          "taskId": 5,
          "status": "open",
          "taskType": "call",
          "taskDescription": "Discuss luxury property options",
          "dueDate": "2024-09-19",
          "urgency": "medium"
        }
      ]
    },
    {
      "id": 6,
      "name": "Skye MacLeod",
      "email": "skye.macleod@example.com",
      "phone": "850-876-6543",
      "mailAddress": "400 Bayshore Ave",
      "mailCity": "Destin",
      "mailSt": "FL",
      "mailZip": "32541",
      "role": "buyer",
      "budget": "600000",
      "propertyType": ["Townhouse"],
      "financingStatus": "Cash buyer",
      "tasks": [
        {
          "taskId": 6,
          "status": "open",
          "taskType": "email",
          "taskDescription": "Send HOA rules and fees",
          "dueDate": "2024-09-20",
          "urgency": "medium"
        }
      ]
    },
    {
      "id": 7,
      "name": "Duncan Robertson",
      "email": "duncan.robertson@example.com",
      "phone": "904-345-6789",
      "mailAddress": "1450 Riverwalk Dr",
      "mailCity": "Jacksonville",
      "mailSt": "FL",
      "mailZip": "32207",
      "role": "seller",
      "budget": "450000",
      "propertyType": ["Residential"],
      "commission": "6%",
      "escrowAmount": "10000",
      "tasks": [
        {
          "taskId": 7,
          "status": "open",
          "taskType": "appointment",
          "taskDescription": "Home inspection appointment",
          "dueDate": "2024-09-21",
          "urgency": "high"
        }
      ]
    },
    {
      "id": 8,
      "name": "Iona Drummond",
      "email": "iona.drummond@example.com",
      "phone": "352-234-5678",
      "mailAddress": "300 Lakeview Rd",
      "mailCity": "Gainesville",
      "mailSt": "FL",
      "mailZip": "32601",
      "role": "investor",
      "budget": "3500000",
      "propertyType": ["Commercial"],
      "futureUse": "Retail space",
      "tasks": [
        {
          "taskId": 8,
          "status": "open",
          "taskType": "call",
          "taskDescription": "Review property financials",
          "dueDate": "2024-09-22",
          "urgency": "high"
        }
      ]
    },
    {
      "id": 9,
      "name": "Angus Montgomery",
      "email": "angus.montgomery@example.com",
      "phone": "386-987-6543",
      "mailAddress": "520 Palmetto Ave",
      "mailCity": "Fort Myers",
      "mailSt": "FL",
      "mailZip": "33901",
      "role": "lead",
      "budget": "500000",
      "propertyType": ["Residential"],
      "wantsNeeds": "Family-friendly community",
      "tasks": [
        {
          "taskId": 9,
          "status": "open",
          "taskType": "email",
          "taskDescription": "Send pre-approval lender details",
          "dueDate": "2024-09-23",
          "urgency": "medium"
        }
      ]
    },
    {
      "id": 10,
      "name": "Lachlan Fraser",
      "email": "lachlan.fraser@example.com",
      "phone": "727-876-4321",
      "mailAddress": "145 Seabreeze Blvd",
      "mailCity": "Clearwater",
      "mailSt": "FL",
      "mailZip": "33755",
      "role": "buyer",
      "budget": "850000",
      "propertyType": ["Beachfront Condo"],
      "financingStatus": "Pre-approved",
      "tasks": [
        {
          "taskId": 10,
          "status": "open",
          "taskType": "appointment",
          "taskDescription": "Tour oceanfront property",
          "dueDate": "2024-09-24",
          "urgency": "high"
        }
      ]
    },
    {
      "id": 11,
      "name": "Gregor Buchanan",
      "email": "gregor.buchanan@example.com",
      "phone": "987-654-1203",
      "role": "lead",
      "budget": "850000",
      "propertyType": ["Residential"],
      "wantsNeeds": "Near good schools",
      "tasks": [
        {
          "taskId": 13,
          "status": "open",
          "taskType": "appointment",
          "taskDescription": "Meet with realtor for property search",
          "dueDate": "2024-09-17",
          "urgency": "high"
        }
      ]
    },
    {
      "id": 12,
      "name": "Hamish MacKenzie",
      "email": "hamish.mackenzie@example.com",
      "phone": "305-456-7890",
      "mailAddress": "1422 Biscayne Blvd",
      "mailCity": "Miami",
      "mailSt": "FL",
      "mailZip": "33132",
      "role": "buyer",
      "budget": "850000",
      "propertyType": ["Luxury Residential"],
      "financingStatus": "Pre-approved",
      "timeFrame": "3 months",
      "tasks": [
        {
          "taskId": 14,
          "status": "open",
          "taskType": "email",
          "taskDescription": "Send mortgage pre-approval details",
          "dueDate": "2024-09-18",
          "urgency": "medium"
        }
      ]
    },
    {
      "id": 13,
      "name": "Eilidh Fraser",
      "email": "eilidh.fraser@example.com",
      "phone": "407-987-6543",
      "mailAddress": "902 Orange Blossom Trail",
      "mailCity": "Orlando",
      "mailSt": "FL",
      "mailZip": "32805",
      "role": "prospect",
      "budget": "600000",
      "propertyType": ["Residential"],
      "wantsNeeds": "Quiet neighborhood, modern kitchen",
      "financingStatus": "Not approved",
      "tasks": [
        {
          "taskId": 15,
          "status": "open",
          "taskType": "call",
          "taskDescription": "Discuss down payment assistance programs",
          "dueDate": "2024-09-19",
          "urgency": "high"
        }
      ]
    },
    {
      "id": 14,
      "name": "Alastair Duncan",
      "email": "alastair.duncan@example.com",
      "phone": "813-678-9101",
      "mailAddress": "651 Bayfront Parkway",
      "mailCity": "Tampa",
      "mailSt": "FL",
      "mailZip": "33606",
      "role": "seller",
      "budget": "950000",
      "propertyType": ["Residential"],
      "commission": "6%",
      "titleCompany": "Sunshine Title Services",
      "tasks": [
        {
          "taskId": 16,
          "status": "open",
          "taskType": "appointment",
          "taskDescription": "Meet appraiser for property valuation",
          "dueDate": "2024-09-20",
          "urgency": "medium"
        }
      ]
    },
    {
      "id": 15,
      "name": "Morven McLeod",
      "email": "morven.mcleod@example.com",
      "phone": "561-987-4567",
      "mailAddress": "212 Seaside Blvd",
      "mailCity": "West Palm Beach",
      "mailSt": "FL",
      "mailZip": "33401",
      "role": "investor",
      "budget": "2000000",
      "propertyType": ["Commercial", "Multi-family"],
      "futureUse": "Short-term rentals",
      "tasks": [
        {
          "taskId": 17,
          "status": "open",
          "taskType": "email",
          "taskDescription": "Send cap rate analysis",
          "dueDate": "2024-09-21",
          "urgency": "low"
        }
      ]
    },
    {
      "id": 16,
      "name": "Fergus Stewart",
      "email": "fergus.stewart@example.com",
      "phone": "239-654-3210",
      "mailAddress": "700 Gulf Coast Hwy",
      "mailCity": "Naples",
      "mailSt": "FL",
      "mailZip": "34102",
      "role": "lead",
      "budget": "1250000",
      "propertyType": ["Luxury Residential"],
      "wantsNeeds": "Beachfront property",
      "tasks": [
        {
          "taskId": 18,
          "status": "open",
          "taskType": "call",
          "taskDescription": "Discuss HOA fees with client",
          "dueDate": "2024-09-22",
          "urgency": "medium"
        }
      ]
    },
    {
      "id": 17,
      "name": "Rory MacLeod",
      "email": "rory.macleod@example.com",
      "phone": "850-987-6543",
      "mailAddress": "400 Ocean Breeze Ave",
      "mailCity": "Destin",
      "mailSt": "FL",
      "mailZip": "32541",
      "role": "buyer",
      "budget": "500000",
      "propertyType": ["Condominium"],
      "financingStatus": "Cash buyer",
      "tasks": [
        {
          "taskId": 19,
          "status": "open",
          "taskType": "email",
          "taskDescription": "Send listing documents to buyer",
          "dueDate": "2024-09-23",
          "urgency": "high"
        }
      ]
    },
    {
      "id": 18,
      "name": "Iona Buchanan",
      "email": "iona.buchanan@example.com",
      "phone": "904-345-6789",
      "mailAddress": "780 Riverside Dr",
      "mailCity": "Jacksonville",
      "mailSt": "FL",
      "mailZip": "32207",
      "role": "seller",
      "budget": "450000",
      "propertyType": ["Residential"],
      "commission": "5%",
      "escrowAmount": "7500",
      "tasks": [
        {
          "taskId": 20,
          "status": "open",
          "taskType": "text",
          "taskDescription": "Confirm closing date with seller",
          "dueDate": "2024-09-24",
          "urgency": "medium"
        }
      ]
    },
    {
      "id": 19,
      "name": "Angus MacPherson",
      "email": "angus.macpherson@example.com",
      "phone": "352-234-5678",
      "mailAddress": "1500 Lakefront Rd",
      "mailCity": "Gainesville",
      "mailSt": "FL",
      "mailZip": "32601",
      "role": "investor",
      "budget": "3000000",
      "propertyType": ["Commercial"],
      "futureUse": "Retail development",
      "tasks": [
        {
          "taskId": 21,
          "status": "open",
          "taskType": "appointment",
          "taskDescription": "Meet with architect for project plan",
          "dueDate": "2024-09-25",
          "urgency": "high"
        }
      ]
    },
    {
      "id": 20,
      "name": "Catriona MacGregor",
      "email": "catriona.macgregor@example.com",
      "phone": "386-987-6543",
      "mailAddress": "290 Palm Avenue",
      "mailCity": "Fort Myers",
      "mailSt": "FL",
      "mailZip": "33901",
      "role": "lead",
      "budget": "400000",
      "propertyType": ["Residential"],
      "wantsNeeds": "Close to downtown",
      "tasks": [
        {
          "taskId": 22,
          "status": "open",
          "taskType": "call",
          "taskDescription": "Review financing with lender",
          "dueDate": "2024-09-26",
          "urgency": "medium"
        }
      ]
    },
    {
      "id": 21,
      "name": "Maisie Wallace",
      "email": "maisie.wallace@example.com",
      "phone": "407-765-9876",
      "mailAddress": "100 Main St",
      "mailCity": "Orlando",
      "mailSt": "FL",
      "mailZip": "32801",
      "role": "prospect",
      "budget": "700000",
      "propertyType": ["Single-Family Home"],
      "tasks": [
        {
          "taskId": 11,
          "status": "open",
          "taskType": "call",
          "taskDescription": "Check in on preferred neighborhoods",
          "dueDate": "2024-09-25",
          "urgency": "medium"
        }
      ]
    }
  ],
  properties: [
    {
      imageUrl: 'imgA.jpg',
      mlsNumber: 'm65432',
      streetAddress: '213 Oakridge Drive',
      city: 'Orlando',
      state: 'FL',
      zipCode: '32801',
      distance: null,
      listPrice: '750,000',
      parcelNumber: '998877',
      bedrooms: 3,
      bathrooms: 2,
      acreage: 1.2,
      livingSqFt: 2400,
      totalSqFt: 2800,
      yearBuilt: 2015,
      zoning: 'Residential',
      buyerFee: 2.5,
      creatorID: 98562357,
      listingLink: 'www.example.com',
    },

    {
      imageUrl: 'imgA.jpg',
      mlsNumber: 'm11223',
      streetAddress: '788 Pineview Court',
      city: 'Tampa',
      state: 'FL',
      zipCode: '33602',
      distance: null,
      listPrice: '925,000',
      parcelNumber: '556677',
      bedrooms: 5,
      bathrooms: 4,
      acreage: 2.0,
      livingSqFt: 3700,
      totalSqFt: 4200,
      yearBuilt: 2019,
      zoning: 'Residential',
      buyerFee: 3.0,
      creatorID: 98562358,
      listingLink: 'www.example.com',
    },

    {
      imageUrl: 'imgA.jpg',
      mlsNumber: 'm77889',
      streetAddress: '456 Cypress Lane',
      city: 'Lakeland',
      state: 'FL',
      zipCode: '33805',
      distance: null,
      listPrice: '595,000',
      parcelNumber: 'ferte4',
      bedrooms: 4,
      bathrooms: 3,
      acreage: 1.8,
      livingSqFt: 2900,
      totalSqFt: 3400,
      yearBuilt: 2016,
      zoning: 'Residential',
      buyerFee: 2.8,
      creatorID: 98562359,
      listingLink: 'www.example.com',
    },

    {
      imageUrl: 'imgA.jpg',
      mlsNumber: 'm99001',
      streetAddress: '902 Coral Reef Drive',
      city: 'Daytona Beach',
      state: 'FL',
      zipCode: '32114',
      distance: null,
      listPrice: '815,000',
      parcelNumber: '223344',
      bedrooms: 3,
      bathrooms: 2,
      acreage: 1.1,
      livingSqFt: 2700,
      totalSqFt: 3100,
      yearBuilt: 2014,
      zoning: 'Residential',
      buyerFee: 2.9,
      creatorID: 98562360,
      listingLink: 'www.example.com',
    },

    {
      imageUrl: 'imgA.jpg',
      mlsNumber: 'm44556',
      streetAddress: '632 Atlantic Blvd',
      city: 'Jacksonville',
      state: 'FL',
      zipCode: '32233',
      distance: null,
      listPrice: '1,350,000',
      parcelNumber: '889900',
      bedrooms: 6,
      bathrooms: 5,
      acreage: 3.2,
      livingSqFt: 4500,
      totalSqFt: 5000,
      yearBuilt: 2021,
      zoning: 'Luxury Residential',
      buyerFee: 3.5,
      creatorID: 98562361,
      listingLink: 'www.example.com',
    },

    {
      imageUrl: 'imgA.jpg',
      mlsNumber: 'm66778',
      streetAddress: '755 Harbor View Drive',
      city: 'Naples',
      state: 'FL',
      zipCode: '34102',
      distance: null,
      listPrice: '2,200,000',
      parcelNumber: '556788',
      bedrooms: 5,
      bathrooms: 4,
      acreage: 2.5,
      livingSqFt: 4100,
      totalSqFt: 4600,
      yearBuilt: 2020,
      zoning: 'Luxury Residential',
      buyerFee: 3.8,
      creatorID: 98562362,
      listingLink: 'www.example.com',
    },

    {
      imageUrl: 'imgA.jpg',
      mlsNumber: 'm88990',
      streetAddress: '378 Oak Hammock Trail',
      city: 'Winter Park',
      state: 'FL',
      zipCode: '32789',
      distance: null,
      listPrice: '785,000',
      parcelNumber: '445566',
      bedrooms: 4,
      bathrooms: 3,
      acreage: 1.7,
      livingSqFt: 3200,
      totalSqFt: 3700,
      yearBuilt: 2015,
      zoning: 'Residential',
      buyerFee: 3.0,
      creatorID: 98562363,
      listingLink: 'www.example.com',
    },

    {
      imageUrl: 'imgA.jpg',
      mlsNumber: 'm23456',
      streetAddress: '289 Riverwalk Drive',
      city: 'Kissimmee',
      state: 'FL',
      zipCode: '34741',
      distance: null,
      listPrice: '645,000',
      parcelNumber: '112233',
      bedrooms: 3,
      bathrooms: 2,
      acreage: 1.2,
      livingSqFt: 2800,
      totalSqFt: 3200,
      yearBuilt: 2013,
      zoning: 'Residential',
      buyerFee: 2.7,
      creatorID: 98562364,
      listingLink: 'www.example.com',
    },

    {
      imageUrl: 'imgA.jpg',
      mlsNumber: 'm98765',
      streetAddress: '999 Sunset Cove',
      city: 'Melbourne',
      state: 'FL',
      zipCode: '32901',
      distance: null,
      listPrice: '1,150,000',
      parcelNumber: '334455',
      bedrooms: 5,
      bathrooms: 4,
      acreage: 2.0,
      livingSqFt: 3500,
      totalSqFt: 4000,
      yearBuilt: 2018,
      zoning: 'Luxury Residential',
      buyerFee: 3.3,
      creatorID: 98562365,
      listingLink: 'www.example.com',
    },

    {
      imageUrl: 'imgA.jpg',
      mlsNumber: 'm54321',
      streetAddress: '556 Bayview Lane',
      city: 'Fort Myers',
      state: 'FL',
      zipCode: '33901',
      distance: null,
      listPrice: '720,000',
      parcelNumber: '778899',
      bedrooms: 4,
      bathrooms: 3,
      acreage: 1.5,
      livingSqFt: 3100,
      totalSqFt: 3600,
      yearBuilt: 2016,
      zoning: 'Residential',
      buyerFee: 2.9,
      creatorID: 98562366,
      listingLink: 'www.example.com',
    },

  ],
};

// Reducer Function
const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.payload.id ? action.payload : c
        ),
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    case "SET_PROPERTIES":
      return { ...state, properties: action.payload };
    case "ADD_PROPERTY":
      return { ...state, properties: [...state.properties, action.payload] };
    case "UPDATE_PROPERTY":
      return {
        ...state,
        properties: state.properties.map((p) =>
          p.parcelNumber === action.payload.parcelNumber ? action.payload : p
        ),
      };
    default:
      return state;
  }
};

// Create Context
const GlobalContext = createContext();

// Global Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom Hook to use Global Context
export const useGlobalState = () => useContext(GlobalContext);
