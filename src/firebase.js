// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-auth-test-4fdf2.firebaseapp.com",
  projectId: "fir-auth-test-4fdf2",
  storageBucket: "fir-auth-test-4fdf2.appspot.com",
  messagingSenderId: "303760028237",
  appId: "1:303760028237:web:365bf312f7bcb5515ae204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service and export it
export const auth = getAuth(app);
// export app as default
export default app;
