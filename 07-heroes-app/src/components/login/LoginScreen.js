import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

  //ofrece funcion que permite navegar a otras pantallas. 
  //Usualmente si me logueo y me dirije a mi pantalla de sesión no queremos que pueda volver a pantalla de login xq ya esta logueado.
  const navigate = useNavigate();
  
  const {user, dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    
    const action = {
      type: types.login,
      payload: {
        name: 'michael',
      }
    }
    
    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    navigate(lastPath, { replace: true});
  }


  return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr />

        <button className='btn btn-primary' onClick={handleLogin}>Login</button>


    </div>
  )
}
