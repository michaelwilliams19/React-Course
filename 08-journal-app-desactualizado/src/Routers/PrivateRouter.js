import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRouter = ({children, isAuthenticated}) => {
  
  console.log(isAuthenticated);
  return (isAuthenticated ? children : <Navigate to="/auth/login" />);
}
