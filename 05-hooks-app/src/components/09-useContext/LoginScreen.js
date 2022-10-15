import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
  
  const {user, setUser} = useContext(UserContext);
  
  const usuarioLogin = {
    id: 123,
    name: 'michael'
  }

  return (
    <div>
        <h1>LoginScreen</h1>
        <hr />

        <button className="btn btn-primary" onClick={() => setUser(usuarioLogin)}>Login</button>
    </div>
  )
}
