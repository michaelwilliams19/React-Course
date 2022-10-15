import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<JournalPage />} />

        <Route path="/*" element={<Navigate to="/" />} /> {/* Esta linea es por si se ingresa una ruta que no existe me lleva directamente a la principal (journalPage) */}
    </Routes>
  )
}
