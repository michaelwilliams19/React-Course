import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { JournalApp } from './JournalApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //React.StrictMode => Problemas: dispara use effect y uselayouteffect 2 veces. Tambien tiene beneficios.
  <React.StrictMode> 
  
    <BrowserRouter>
      <JournalApp />
    </BrowserRouter>
  
  </React.StrictMode>
)
