import { useState, useEffect } from "react";
import "./styles/cart.css";
import deleteimg from "../assets/delete-img.svg";
import plussymbol from "../assets/plus-symbol.svg";
import minussymbol from "../assets/minus-symbol.svg";
import { Link } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../auth/auth";
import Navbar from "../components/navbar";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [productMap, setProductMap] = useState({});

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const q1 = query(
          collection(db, "carts"),
          where("userID", "==", "Admin")
        );
        const q2 = query(collection(db, "products"));
        const productSnapshot = await getDocs(q2);
        const cartSnapshot = await getDocs(q1);

        const cartArray = cartSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

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

    console.log("Fetched from DB");
    loadProducts();
  }, []);

  const removeItem = (itemId) => {
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
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateFulltotal = () => {
    return (
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0) +
      0
    );
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
                <div className="subtotal">₹0.00</div>
              </div>
            </div>
            <div className="total-child" />
            <div className="total-parent">
              <div className="total-label">Total</div>
              <div className="total-cost">₹{calculateFulltotal()}.00</div>
            </div>
          </div>
          <button className="checkout-button">
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
