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
