import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        {/* Cualquier ruta que comience con /auth/ si no existe lanzara la que se decidio por defecto en AuthRoutes.*/}
        <Route path="/auth/*" element={<AuthRoutes />}/>

        {/* Journal APP */}
        <Route path="/*" element={<JournalRoutes />}/>
    </Routes>
  )
}
