import React from "react";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../auth/auth";

const Addimage = () => {
  const [image, setImage] = useState(null);

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
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleFormSubmit}>SUBMIT</button>
    </div>
  );
};
export default Addimage;
