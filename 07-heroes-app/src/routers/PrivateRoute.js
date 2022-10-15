import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'



// Children viene cargado de los componentes hijos que se asignaron en AppRouter.
export const PrivateRoute = ({ children }) => {
  
    const location = useLocation();


    const lastPath = location.pathname + location.search;
    localStorage.setItem('lastPath', lastPath);

    const {user, dispatch} = useContext(AuthContext);
    return user.logged ? children : <Navigate to="/login"/>
  
}
