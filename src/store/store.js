import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { moviesSlice } from './movies'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    movies: moviesSlice.reducer
  },
})