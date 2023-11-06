//import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore,addDoc,collection } from "firebase/firestore";

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

const db = getFirestore(app);

const AddToCart = async (props) => {
    try {
        const docRef = await addDoc(collection(db, "carts"), {
          productID: props.productID,
          userID: props.userID,
          quantity: props.quantity
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    return (
        <div>
            {docRef}
        </div>
    )
}

export default AddToCart;