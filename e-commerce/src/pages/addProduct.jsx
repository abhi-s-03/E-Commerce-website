import React, { useState } from "react";
import { addDoc, collection, getDocs, where, query } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../auth/auth";

function AddProduct() {
  const prodArray = [];
  const [artistProd, setArtistProd] = useState([]);
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
      alert("Error adding document: ", e);
    }
  };
  const handleViewProd = async (e) => {
    e.preventDefault();
    try {
      const q = query(
        collection(db, "products"),
        where("artistID", "==", "Aaron")
      );
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        console.log(doc.data());
        prodArray.push(doc.data());
      });
      setArtistProd(prodArray);
      console.log(prodArray);
    } catch (error) {
      console.error("ERROR is" + error);
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder="ARTIST"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          placeholder="QTY"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <input
          placeholder="DESCRIPTION"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="PRICE"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleFormSubmit}>SUBMIT</button>
      </div>
      <div>
        <h>Existing Prods</h>
        <hr></hr>

        <button onClick={handleViewProd}>VIEW PRODS</button>
        {artistProd.map((art) => (
          <div>
            <h>{art.prodDesc}</h>
            <br></br>
            <h>{art.image}</h>
            <br></br>
            <h>{art.prodQty}</h>
            <br></br>
            <h>{art.artistID}</h>
            <br></br>
            <h>{art.prodPrice}</h>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddProduct;
