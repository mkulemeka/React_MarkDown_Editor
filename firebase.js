// Import the functions you need from the SDKs you need

import {collection, getFirestore} from 'firebase/firestore';

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-notes-a88d7.firebaseapp.com",
  projectId: "react-notes-a88d7",
  storageBucket: "react-notes-a88d7.appspot.com",
  messagingSenderId: "832477708908",
  appId: "1:832477708908:web:8c8162ea7e8e8efd4f4e49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const notesCollection = collection(db, 'notes');
