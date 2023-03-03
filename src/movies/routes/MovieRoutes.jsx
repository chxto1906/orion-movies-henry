import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MoviePage } from '../pages/MoviePage'

export const MovieRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <MoviePage position={1} /> } />
        <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  )
}
