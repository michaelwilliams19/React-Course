import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegistrerScreen } from '../components/auth/RegisterScreen'

// path=/auth/login component login screen.
// path=/auth/register component register screen.
// navigate to /auth/login
export const AuthRouter = () => {
  return (
      <div className="auth__main">

        <div className="auth__box-container">
            <Routes>
                {/* Aqui las rutas empezaran a ser: "auth/login"  o "auth/register" por ejemplo.*/}
                <Route path="login" element = {<LoginScreen/>} />
                <Route path="register" element = {<RegistrerScreen/>} />

                <Route path="*" element = {<Navigate to="login" />} />
                {/* <Route path="*" element = {<LoginScreen />} /> OTRA FORMA DE HACERLO. CON LA DIFERENCIA DE QUE LA URL QUEDA MAL. */}

            </Routes>
        </div>
      
      </div>
  )
}
