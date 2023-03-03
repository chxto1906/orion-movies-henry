import { Typography } from '@mui/material'
import React from 'react'
import { MovieLayout } from '../layout/MovieLayout'
import { MoviesListView } from '../views'

export const MoviePage = ({ position }) => {
  return (
    <MovieLayout position={position}>
      <MoviesListView />
    </MovieLayout>
  )
}
