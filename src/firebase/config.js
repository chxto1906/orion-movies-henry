/**
 * Este código importa la biblioteca Firebase y utiliza las constantes initializeApp, getAuth y getFirestore 
 * para configurar y obtener instancias de la aplicación Firebase, la autenticación de Firebase 
 * y la base de datos Firestore, respectivamente. Luego, se exportan estas instancias para que se puedan 
 * utilizar en otras partes del código. La configuración de Firebase se toma de las variables de entorno 
 * definidas en el archivo .env.
 */


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
};


export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth( FireBaseApp );
export const FireBaseDB = getFirestore( FireBaseApp );
