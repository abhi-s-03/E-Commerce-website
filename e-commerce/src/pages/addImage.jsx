import React from "react";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
  //const db = getFirestore(app);
  const storage = getStorage(app);
function addImage()
{    const [image, setImage] = useState(null);
    const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload the image to Firebase Storage
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);

      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(imageRef);

      // Add the product details and the image URL to Firestore
    

      console.log("Document written with ID: ", imageRef);
    } catch (e) {
      alert("Error adding document: " + e);
    }
  };
    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            <button onClick={handleFormSubmit}>SUBMIT</button>
        </div>
    );
}
export default addImage;