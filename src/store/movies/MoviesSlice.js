import { createSlice } from '@reduxjs/toolkit';
export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        isSaving: true,
        messageSaved: '',
        movies: [],
        /*active: {
            id:"zp0q6zydOyll2t8TkULS",
            rating:4.2,
            cast_crew:"Leonardo DiCaprio, Kate Winslet, Billy Zane",
            gender:"Drama",
            name:"Titanic"
        }*/
        active: null
    },
    reducers: {

        addNewEmptyMovie: (state, action) => {
            state.movies.push( action.payload );
            state.isSaving = false;
        },

        setActiveMovie: (state, action) => {

        },

        setMovies: (state, action) => {
            state.movies = action.payload;
        },

        setSaving: (state) => {

        },

        updateMovie: (state, action) => {

        },

        deleteMovieById: (state, action) => {

        },
    }
});

export const { setMovies, addNewEmptyMovie } = moviesSlice.actions;