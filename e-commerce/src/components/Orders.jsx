import React, { useState } from 'react';
import './styles/Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'Customer 1', status: 'Pending' },
    { id: 2, customer: 'Customer 2', status: 'Shipped' },
    // Add more orders as needed
  ]);

  const processOrder = (id) => {
    // Implement functionality to process an order
  };

  return (
    <div className="orders-container">
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.customer} - {order.status}
            <button onClick={() => processOrder(order.id)}>Process Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
