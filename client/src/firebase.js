// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a1608.firebaseapp.com",
  projectId: "mern-blog-a1608",
  storageBucket: "mern-blog-a1608.firebasestorage.app",
  messagingSenderId: "45566748486",
  appId: "1:45566748486:web:e8b73cb12a0c23a163e747",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
