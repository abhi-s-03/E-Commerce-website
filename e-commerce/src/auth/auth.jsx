import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjCBgYjLkVHH9egP-klxA95wzXNdCOln4",
  authDomain: "e-commerce-website-4c47d.firebaseapp.com",
  projectId: "e-commerce-website-4c47d",
  storageBucket: "e-commerce-website-4c47d.appspot.com",
  messagingSenderId: "77440245018",
  appId: "1:77440245018:web:c370caa40a2c3259c520a3",
  measurementId: "G-7RJGHS8P5S"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export default auth;
export {db} ; 
export {storage};

