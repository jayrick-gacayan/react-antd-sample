import React from 'react';
import { Navigate, Route } from 'react-router-dom';

export const PrivateRoute = (props) => {
    return (
        <Route path={ props.path } 
            element={ props.element } />
    );
}

export const ProtectedRoute = (props) => {
    return (
        <Route path={ props.path }
            element={ props.element } />
    );
}

export const PublicRoute = (props) => {
    return (
        <Route path={ props.path }
            element={ props.element } />
    );
}