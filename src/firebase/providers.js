
import { signInWithEmailAndPassword } from "firebase/auth";
import { FireBaseAuth } from "./config";


/**
 * recibe un objeto con email y password, y utiliza la función signInWithEmailAndPassword de Firebase 
 * para autenticar al usuario. Si la autenticación es exitosa, devuelve un objeto con ok en true, 
 * junto con el nombre de usuario, la foto de perfil y el identificador 
 * de usuario (displayName, photoURL y uid, respectivamente). 
 * Si hay un error, devuelve un objeto con ok en false y el mensaje de error (errorMessage).
 */
export const loginWithEmailPassword = async({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword(FireBaseAuth, email, password);
        const { displayName, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName, photoURL, uid
        }
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}

/**
 * utiliza la función signOut de Firebase para cerrar la sesión del usuario. 
 * Retorna una promesa que se resuelve una vez que la sesión del usuario ha sido cerrada.
 */
export const logOutFirebase = async() => {
    return await FireBaseAuth.signOut();
}