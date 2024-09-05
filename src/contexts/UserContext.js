// src/contexts/UserContext.js
import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    // State to hold user data
    const [user, setUser] = useState({
        id: '1',
        name: 'Benjamin Sommerville',
        email: 'nextbendev@gmail.com',
        creatorId: '34895734',
        userId: '34895734',
        loggedIn: false
    });

    // Function to log in a user (dummy example)
    const logInUser = (userData) => {
        setUser({ ...userData, loggedIn: true });
    };

    // Function to log out a user
    const logOutUser = () => {
        setUser({ id: null, name: '', email: '', creatorId: null, loggedIn: false });
    };

    return (
        <UserContext.Provider value={{ user, setUser, logInUser, logOutUser }}>
            {children}
        </UserContext.Provider>
    );
};
