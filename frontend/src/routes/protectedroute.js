// Libraries
import React from 'react'
import { Route, Navigate } from 'react-router-dom';

// Route Component
const protectedroute = ({ element: Component, ...rest}) => {
    const isAuthenticated = () => {
        return document.cookie.split('; ').some(row => row.startsWith('laravel_session='));
    };

    return (
        <Route
            {...rest}
            element={isAuthenticated() ? <Component /> : <Navigate to="/login" />}
        />
    )
}

export default protectedroute