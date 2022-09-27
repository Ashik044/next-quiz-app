// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDO1XMCsbNXOWNoERGYCRty1LyJJuspW-U",
  authDomain: "react-quiz-app-340f7.firebaseapp.com",
  databaseURL:
    "https://react-quiz-app-340f7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-quiz-app-340f7",
  storageBucket: "react-quiz-app-340f7.appspot.com",
  messagingSenderId: "457998978869",
  appId: "1:457998978869:web:8605189ac04ececbbfc67c",
  measurementId: "G-SFQGN7JM78",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const dataBase = getDatabase(app);
