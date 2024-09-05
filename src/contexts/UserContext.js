// src/contexts/UserContext.js
import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    // State to hold user data
    const [user, setUser] = useState({
        userId: '34895734',
        name: 'Benjamin Sommerville',
        email: 'nextbendev@gmail.com',
        cellPhone: '863-867-5309',
        brokerage: 'Advantage Realty #1',
        brokerageId: '1',
        creatorId: '34895734',
        loggedIn: 'false',
    });
    console.log(user, "user data")
    // Function to log in a user (dummy example)
    const logInUser = (userData) => {
        setUser({ ...userData, loggedIn: true });
    };

    // Function to log out a user
    const logOutUser = () => {
        setUser({  userId: null, name: '', email: '', loggedIn: false });
    };

    return (
        <UserContext.Provider value={{ user, setUser, logInUser, logOutUser }}>
            {children}
        </UserContext.Provider>
    );
};
