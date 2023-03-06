
import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {

        const result = await signInWithPopup( FireBaseAuth, googleProvider );
        //const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            //user info
            displayName, email, photoURL, uid
        }
        
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}


export const loginWithEmailPassword = async({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword(FireBaseAuth, email, password);
        const { displayName, photoURL, uid } = result.user;
        return {
            ok: true,
            //user info
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


export const logOutFirebase = async() => {
    return await FireBaseAuth.signOut();
}