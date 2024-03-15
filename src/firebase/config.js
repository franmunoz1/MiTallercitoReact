import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD8sYVWZoDduypWqC-QnAivP5s1exa5n7Y",
    authDomain: "mitallercito-3e352.firebaseapp.com",
    projectId: "mitallercito-3e352",
    storageBucket: "mitallercito-3e352.appspot.com",
    messagingSenderId: "413325784943",
    appId: "1:413325784943:web:7663cbf2c454e16aa0da9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

