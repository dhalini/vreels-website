// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNqqLyS0Opb8OoQkTxNmTApViFF7PhTSA",
  authDomain: "vreels-7058c.firebaseapp.com",
  projectId: "vreels-7058c",
  storageBucket: "vreels-7058c.firebasestorage.app",
  messagingSenderId: "344020135768",
  appId: "1:344020135768:web:92b5889b35aadeeafe3f2d",
  measurementId: "G-SWSD0V35VZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };