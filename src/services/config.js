import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_u0GMOuOTgzTz_ekqTT4uU3w3HC6wDkA",
    authDomain: "serpensortia-21b7c.firebaseapp.com",
    projectId: "serpensortia-21b7c",
    storageBucket: "serpensortia-21b7c.appspot.com",
    messagingSenderId: "394074321058",
    appId: "1:394074321058:web:127fcd1f375e4ad72667fb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);