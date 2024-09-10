// Libraries
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Route Component
const ProtectedRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return !!token; // Return true if token exists, otherwise false
    };

    return (
        <Route
            {...rest}
            element={isAuthenticated() ? <Component /> : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;