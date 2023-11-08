import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./styles/addProduct.css";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../auth/auth";

function AddProduct() {
  const [artist, setArtist] = useState("");
  const [qty, setQty] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      const docRef = await addDoc(collection(db, "products"), {
        artistID: artist,
        prodDesc: description,
        prodName: name,
        prodPrice: parseInt(price),
        prodQty: parseInt(qty),
        image: imageUrl,
      });

      console.log("Document written with ID: ", docRef.id);
      setArtist("");
      setDescription("");
      setImage(null);
      setPrice("");
      setName("");
      setQty("");
    } catch (e) {
      alert("Error adding document: " + e);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Add New Artwork</h2>
        <input
          className="input-field"
          placeholder="ARTIST"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          className="input-field"
          placeholder="QTY"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <input
          className="input-field"
          placeholder="DESCRIPTION"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="input-field"
          placeholder="ART NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-field"
          placeholder="PRICE"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="input-field"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button className="submit-button" onClick={handleFormSubmit}>
          SUBMIT
        </button>
      </div>
      <Link to="/seller">
        <button className="return-to-seller-button">&#8592;</button> {/* Left-facing arrow */}
      </Link>
    </div>
  );
}

export default AddProduct;
