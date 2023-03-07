/**
 * El código define un hook personalizado llamado useCheckAuth que utiliza useSelector y useDispatch 
 * de react-redux para obtener el estado de autenticación de la aplicación y despachar acciones. 
 * El hook también utiliza el método onAuthStateChanged de Firebase Auth para verificar el estado de autenticación 
 * del usuario y, en caso de que el usuario no esté autenticado, llamar al método logout y si está autenticado, 
 * llamar al método login y luego startLoadingMovies. El hook devuelve el estado de autenticación.
 */

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FireBaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingMovies } from "../store/movies";


export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
      onAuthStateChanged( FireBaseAuth, async( user ) => {
        if (!user) return dispatch( logout() )
        const { uid, email, displayName, photoURL } = user;
        dispatch( login({ uid, email, displayName, photoURL }) );
        dispatch( startLoadingMovies() );
      } )
    
    }, [])

    return status 
}
