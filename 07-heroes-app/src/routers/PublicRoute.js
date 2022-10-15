import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

// Children viene cargado de los componentes hijos que se asignaron en AppRouter.
export const PublicRoute = ({ children }) => {
  
    const {user, dispatch} = useContext(AuthContext);
    
    return user.logged ? <Navigate to="/marvel" /> : children;
}
