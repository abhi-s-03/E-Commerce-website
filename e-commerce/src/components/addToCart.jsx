import { addDoc,collection } from "firebase/firestore";
import {db} from "../auth/auth";

const AddToCart = (props) => {
  const data = props;
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const docRef = await addDoc(collection(db, "carts"), {
          productID: data.productID,
          userID: data.userID,
          quantity: data.quantity
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    
    return(<div><button type="submit" onClick={handleSubmit}>Add to Cart</button></div>)
}

export default AddToCart;