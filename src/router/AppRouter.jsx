/**
 * 
 * El componente AppRouter utiliza el hook useCheckAuth para verificar el estado de autenticación del usuario 
 * y muestra el componente CheckingAuth mientras se verifica. Si el usuario está autenticado, muestra las rutas 
 * de películas utilizando el componente MovieRoutes. Si el usuario no está autenticado, muestra las rutas de 
 * autenticación utilizando el componente AuthRoutes. En ambos casos, se define una ruta comodín que redirige 
 * a la página de inicio de sesión si la ruta especificada no existe en la aplicación.
 */


import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useCheckAuth } from "../hooks"
import { MovieRoutes } from "../movies/routes/MovieRoutes"
import { CheckingAuth } from "../ui/"

export const AppRouter = () => {
    const status = useCheckAuth();
    if (status === 'checking') {
      return <CheckingAuth />
    }
  return (
    <Routes>
        {
          ( status === 'authenticated' )
          ? <Route path="/*" element={ <MovieRoutes /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> }></Route>
        }
        <Route path="/*" element={ <Navigate to='/auth/login' />} />
    </Routes>
  )
}
