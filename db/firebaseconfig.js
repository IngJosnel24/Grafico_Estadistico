import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBtRUEMZeyyQ3NdlLCAl3YadVbKXT7D8VE",
    authDomain: "estadistica-b50af.firebaseapp.com",
    projectId: "estadistica-b50af",
    storageBucket: "estadistica-b50af.firebasestorage.app",
    messagingSenderId: "593299950821",
    appId: "1:593299950821:web:19a5c968cc3b936d48580c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;