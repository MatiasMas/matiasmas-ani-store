import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Setting up the application with my firebase credentials
const firebaseConfig = {
    apiKey: "AIzaSyDBZG0VlqTEWwPu5eHIStrFduStbGRQS0k",
    authDomain: "ani-store-coderhouse.firebaseapp.com",
    projectId: "ani-store-coderhouse",
    storageBucket: "ani-store-coderhouse.appspot.com",
    messagingSenderId: "476858888855",
    appId: "1:476858888855:web:705f52899831af2c082fd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);