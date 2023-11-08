import React, { useState } from 'react';
import './styles/Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: 'Customer 1',
      status: 'Pending',
      items: [
        {
          name: 'Item 1',
          quantity: 2,
          price: 10,
          image: 'item1.jpg', // Add the image file name or path
        },
        {
          name: 'Item 2',
          quantity: 3,
          price: 15,
          image: 'item2.jpg', // Add the image file name or path
        },
        // Add more items as needed
      ],
    },
    {
      id: 2,
      customer: 'Customer 2',
      status: 'Shipped',
      items: [
        {
          name: 'Item 3',
          quantity: 1,
          price: 5,
          image: 'item1.jpg', // Add the image file name or path
        },
        // Add more items as needed
      ],
    },
    // Add more orders as needed
  ]);

  const processOrder = (id) => {
    // Implement functionality to process an order
  };

  return (
    <div className="orders-container">
      <h2>Orders</h2>
      {orders.map((order) => (
        <div className="order" key={order.id}>
          <h3>Order {order.id}</h3>
          <ul className="order-items">
            {order.items.map((item, index) => (
              <li key={index} className="order-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">Price: ₹{item.price}</span>
                  <span className="item-quantity">Qty: {item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={() => processOrder(order.id)} className="process-order-button">
            Process Order
          </button>
        </div>
      ))}
    </div>
  );
};

export default Orders;
