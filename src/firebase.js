// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBbGF7BYmb8Zlb3WqZRQPRnqf2mBZLZz4",
  authDomain: "eltemplo-4d9d9.firebaseapp.com",
  projectId: "eltemplo-4d9d9",
  storageBucket: "eltemplo-4d9d9.appspot.com",
  messagingSenderId: "481208912754",
  appId: "1:481208912754:web:cb71ba70860e3d828dabeb",
  measurementId: "G-E6NF6HVY5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default { app };  