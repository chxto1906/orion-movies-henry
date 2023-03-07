/**
 * Define un componente AuthRoutes que renderiza rutas específicas de autenticación. 
 * Si el usuario intenta acceder a cualquier ruta no especificada (a través de "/*"), 
 * se redirigirá a la página de inicio de sesión (<LoginPage />) mediante el componente Navigate. 
 * Si el usuario accede a la ruta /auth/login, se mostrará la página de inicio de sesión
 */

import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages"

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
