// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7L7XfVXUfKK7srdYqB9blIR74NKcDrNw",
  authDomain: "alkemy-challenge-4e6fd.firebaseapp.com",
  projectId: "alkemy-challenge-4e6fd",
  storageBucket: "alkemy-challenge-4e6fd.appspot.com",
  messagingSenderId: "396995966090",
  appId: "1:396995966090:web:fbd14b9f190335ac336973"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);