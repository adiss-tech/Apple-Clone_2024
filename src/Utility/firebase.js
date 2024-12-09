// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// For authentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore" 
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6_z9osFag9VmkwQ9g-Y8qetQ4mElrdys",
  authDomain: "clone-e66ef.firebaseapp.com",
  projectId: "clone-e66ef",
  storageBucket: "clone-e66ef.firebasestorage.app",
  messagingSenderId: "930633559641",
  appId: "1:930633559641:web:eec23e72944eac3d174b48",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
