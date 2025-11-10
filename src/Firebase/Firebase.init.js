// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL-1PL8_7aRE_MfbqiYHOTzk9MfcmB6aQ",
  authDomain: "studymate-firebase-auth.firebaseapp.com",
  projectId: "studymate-firebase-auth",
  storageBucket: "studymate-firebase-auth.firebasestorage.app",
  messagingSenderId: "30357734743",
  appId: "1:30357734743:web:07976e2ad78e22999c6a12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);