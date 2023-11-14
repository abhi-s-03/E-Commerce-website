import { useState, useEffect } from "react";
import "./styles/cart.css";
import deleteimg from "../assets/delete-img.svg";
import plussymbol from "../assets/plus-symbol.svg";
import minussymbol from "../assets/minus-symbol.svg";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, where, query, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../auth/auth";
import Navbar from "../components/navbar";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [productMap, setProductMap] = useState({});
  const navigate = useNavigate();

  const loadProducts = async () => {
    try {
      const q1 = query(
        collection(db, "carts"),
        where("userID", "==", "njvYETeeSpAF5xIFwfnI") //set userID here
      );
      const q2 = query(collection(db, "products"));
      const productSnapshot = await getDocs(q2);
      const cartSnapshot = await getDocs(q1);

      const cartArray = cartSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(cartArray);

      const productObject = {};
      productSnapshot.docs.forEach((doc) => {
        productObject[doc.id] = {
          id: doc.id,
          ...doc.data(),
        };
      });

      setProductMap(productObject);
      setCartItems(cartArray);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  useEffect(() => {
    console.log("Fetched from DB");
    loadProducts();
  }, []);

  const removeItem = async (itemId) => {
    const cartDocRef = doc(db, "carts", itemId);
      await deleteDoc(cartDocRef);
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const calculateSubtotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => {
        const itemPrice = productMap[item.productID]?.prodPrice || 0; // Default to 0 if prodPrice is undefined
        return total + itemPrice * item.quantity;
      },
      0
    );
  
    console.log("Subtotal:", subtotal);
  
    return subtotal;
  };

  const calculateShipping = () => {
    // You can implement your shipping logic here
    // For simplicity, let's assume free shipping if the subtotal is above a certain amount
    const freeShippingThreshold = 1000; // Change this threshold as needed
    return calculateSubtotal() >= freeShippingThreshold ? 0 : 50; // Change the shipping amount as needed
  };

  const calculateFulltotal = () => {
    const fulltotal =
      cartItems.reduce((total, item) => {
        const itemPrice = productMap[item.productID]?.prodPrice || 0;
        return total + itemPrice * item.quantity;
      }, 0) + calculateShipping(); // Include the shipping charge here
  
    console.log("Fulltotal:", fulltotal);
  
    return fulltotal;
  };

  const handleCheckout = async () => {
    // Update the "carts" collection with the modified cartItems
    try {
      for (const cartItem of cartItems) {
        const cartDocRef = doc(db, "carts", cartItem.id);
        await updateDoc(cartDocRef, {
          quantity: cartItem.quantity,
        });
      }
      navigate("/checkoutform");
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="cart-container-Product-list">
          <div className="Product-list-heading">
            <div className="heading-shopping-cart1">Shopping Cart</div>
          </div>
          <div className="Product-list-sub-heading">
            <div className="sub-heading-products">Products</div>
            <div className="sub-heading-price">Price</div>
            <div className="sub-heading-quantity1">Quantity</div>
            <div className="sub-heading-sub-total">Sub-Total</div>
          </div>

          <div className="Product-list-cart-items">
            {cartItems.map((item) => (
              <div className="cart-items-cart-item" key={item.id}>
                <div className="cart-item-cart-item1">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="cart-item1-remove-button"
                  >
                    <img
                      className="remove-button-delete-icon"
                      alt=""
                      src={deleteimg}
                    />
                  </button>

                  <img
                    className="cart-item1-item-image"
                    src={productMap[item.productID].image}
                    alt={"ss"}
                  />

                  <div className="cart-item1-item-name">
                    {productMap[item.productID].prodName}
                  </div>
                </div>

                <div className="cart-item-item-price">
                  {productMap[item.productID].prodPrice}
                </div>

                <div className="cart-item-quantity">
                  <div className="quantity-button2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="decrbutt"
                    >
                      <img
                        className="button2-minus-icon"
                        alt=""
                        src={minussymbol}
                      />
                    </button>
                    <div className="button2-item-count">{item.quantity}</div>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="incrbutt"
                    >
                      <img
                        className="button2-plus-icon"
                        alt=""
                        src={plussymbol}
                      />
                    </button>
                  </div>
                </div>
                <div className="cart-item-item-subtotal">
                  ₹{productMap[item.productID].prodPrice * item.quantity}.00
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-container-cart-total">
          <div className="cart-total-heading">
            <div className="heading-cart-totals">Cart Totals</div>
          </div>
          <div className="cart-total-money">
            <div className="sub-total-parent">
              <div className="sub-total-child">
                <div className="subtotal-label">Sub-total</div>
                <div className="subtotal">₹{calculateSubtotal()}.00</div>
              </div>
              <div className="sub-total-child">
                <div className="subtotal-label">Shipping</div>
                <div className="subtotal">₹{calculateShipping()}.00</div>
              </div>
            </div>
            <div className="total-child" />
            <div className="total-parent">
              <div className="total-label">Total</div>
              <div className="total-cost">₹{calculateFulltotal()}.00</div>
            </div>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            <Link to="/checkoutform">
              <b className="checkout-button-text">Proceed to Checkout </b>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
