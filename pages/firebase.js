// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID,
//   measurementId: "G-SFQGN7JM78",
// };

// // Initialize Firebases
// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDO1XMCsbNXOWNoERGYCRty1LyJJuspW-U",
  authDomain: "react-quiz-app-340f7.firebaseapp.com",
  projectId: "react-quiz-app-340f7",
  storageBucket: "react-quiz-app-340f7.appspot.com",
  messagingSenderId: "457998978869",
  appId: "1:457998978869:web:8605189ac04ececbbfc67c",
  measurementId: "G-SFQGN7JM78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
