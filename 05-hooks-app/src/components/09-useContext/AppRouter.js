import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <Router>
        <div>

            <NavBar />
            
            {/* estas rutas van en orden. Es decir, si ingreso una ruta que no existe va a estar chequeando en orden secuencial. En este caso, al no encontrar ninguna ruta,
            la ruta por defecto va a ser la ultima que va a dirigir al homescreen. */}
            <div className='container'>
              <Routes>
                  <Route path="/" element = {<HomeScreen />} />
                  <Route path="/about" element = {<AboutScreen />} />
                  <Route path="/login" element = {<LoginScreen />} />
                  <Route path="*" element = {<Navigate to="/" />} />
                  {/* <Route path="*" element = {<HomeScreen />} /> */}

              </Routes>
            </div>

        </div>

    </Router>
  )
}
