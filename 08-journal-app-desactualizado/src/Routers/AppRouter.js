//ESTE ES MI SISTEMA DE RUTAS PRINCIPAL!

import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes, startLoadingNotes } from '../actions/notes';

//crear una ruta que tenga el path a /auth. al componenente authRouter.
//otra ruta "Main Route" a "/" al componente journal screen.

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( async (user) => {
      
      if (user?.uid){
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

       dispatch(startLoadingNotes(user.uid)) 
      }
      else {
        setIsLoggedIn(false);
      }
      
      setChecking(false); //quiere decir que ya tengo la respuesta.
    })
  
  }, [dispatch, setChecking, setIsLoggedIn])
  
  if (checking) {
    return (<h1>Espere...</h1>)
  }

  return (
    <BrowserRouter>

        <Routes>
            
            <Route 
              path="/auth/*" 
              element = { 
                <PublicRouter isAuthenticated = {isLoggedIn} >
                    <AuthRouter /> 
                 </PublicRouter> 
              } 
            />

            <Route path="/" element = { 
                <PrivateRouter isAuthenticated={isLoggedIn}>
                 <JournalScreen /> 
                </PrivateRouter> 
            } />
            
            <Route path="/*" element = {<Navigate to="auth/login" />} />


        </Routes>
    </BrowserRouter>
  )
}
