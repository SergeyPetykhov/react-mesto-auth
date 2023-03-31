import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, Component, ...props }) => {
  return (
    loggedIn ? <Component {...props } /> : <Navigate to="/signup" replace/>
  )
};

export default ProtectedRoute;

