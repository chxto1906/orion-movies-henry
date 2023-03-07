
import { loginWithEmailPassword, logOutFirebase } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

/**
 * El código define una función llamada checkingAuthentication que recibe sin parámetros, 
 * y que retorna una función asíncrona que recibe un parámetro dispatch. Dentro de esta función, 
 * se realiza una acción de redux llamada checkingCredentials, que indica que se está verificando 
 * las credenciales de autenticación.
 */
export const checkingAuthentication = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() )
    }
}


/**
 * es una acción asíncrona que se ejecuta cuando el usuario inicia sesión con su correo electrónico y contraseña. 
 * Recibe los parámetros email y password, y devuelve una función asincrónica que dispara la acción 
 * checkingCredentials() y luego llama a la función loginWithEmailPassword de Firebase, pasándole los valores email 
 * y password. Si el resultado de loginWithEmailPassword indica que la autenticación no fue exitosa (result.ok es false), 
 * dispara la acción logout(result), y si es exitosa dispara la acción login(result).
 * @returns 
 */
export const startLoginWithEmailPassword = ( { email, password } ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )
        const result = await loginWithEmailPassword({ email, password });
        if (!result.ok) return dispatch( logout(result) )
        dispatch( login(result) )
    }
}


/**
 * Este código exporta una función llamada startLogout que devuelve otra función asincrónica. Cuando se invoca, 
 * esta función realiza dos acciones:
 * Llama a la función asincrónica logOutFirebase que hace un log out en Firebase.
 * Despacha la acción logout() a través de la función dispatch.
 */
export const startLogout = () => {
    return async ( dispatch ) => {
        await logOutFirebase();
        dispatch ( logout() )
    }
}