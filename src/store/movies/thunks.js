import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FireBaseDB } from "../../firebase/config";
import { loadMovies } from "../../movies/helpers/loadMovies"
import { addNewEmptyMovie, setMovies } from "./MoviesSlice";


export const startNewMovie = () => {
    return async( dispatch ) => {

        const newMovie = {
            rating:4.2,
            cast_crew:"Leonardo DiCaprio, Kate Winslet, Billy Zane",
            gender:"Drama",
            name:"Titanic"
        }

        const newDoc = doc( collection( FireBaseDB, 'movies') );
        const setDocResp = await setDoc( newDoc, newMovie );
        newMovie.id = newDoc.id;
        dispatch ( addNewEmptyMovie( newMovie ) );
    }
}

export const startLoadingMovies = () => {
    return async ( dispatch ) => {
        const movies = await loadMovies();
        dispatch( setMovies( movies ) )
    }
}