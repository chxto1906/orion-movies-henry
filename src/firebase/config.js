// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIVl108jQZLWWlXa5MzRcxNbEN-84D9zI",
  authDomain: "orionmovieshenry.firebaseapp.com",
  projectId: "orionmovieshenry",
  storageBucket: "orionmovieshenry.appspot.com",
  messagingSenderId: "890470697277",
  appId: "1:890470697277:web:e7fbc07f6092ed83349d54",
  measurementId: "G-BNVJQ76F6E"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth( FireBaseApp );
export const FireBaseDB = getFirestore( FireBaseApp );
//const analytics = getAnalytics(app);