import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "e-commerce-website-4c47d.firebaseapp.com",
  projectId: "e-commerce-website-4c47d",
  storageBucket: "e-commerce-website-4c47d.appspot.com",
  messagingSenderId: "77440245018",
  appId: "1:77440245018:web:8c243d81abfe3fc3c520a3",
  measurementId: "G-W5HFRPJ9HK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default auth;
export {db} ; 

