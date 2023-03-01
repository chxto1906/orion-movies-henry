import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { MovieRoutes } from "../movies/routes/MovieRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRoutes /> }></Route>
        <Route path="/*" element={ <MovieRoutes /> } />
    </Routes>
  )
}
