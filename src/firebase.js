// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvpq1fXeL91t5C250zdsiTyCvSi6C8ORE",
  authDomain: "firestore-db-747d0.firebaseapp.com",
  projectId: "firestore-db-747d0",
  storageBucket: "firestore-db-747d0.firebasestorage.app",
  messagingSenderId: "905431132553",
  appId: "1:905431132553:web:10e688bf299376754b9958",
  measurementId: "G-5MG2X0B7G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app)