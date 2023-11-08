import React, { useState } from 'react';
import './styles/Earnings.css';

const Earnings = () => {
  const [alreadyCredited, setAlreadyCredited] = useState(1000); // Initialize already credited earnings as needed
  const [pendingPayment, setPendingPayment] = useState(500); // Initialize pending payment earnings as needed

  return (
    <div className="earnings-container">
      <h2>Earnings Overview</h2>
      <div className="earnings-section">
        <h3>Already Credited</h3>
        <p>Total Earnings: ₹{alreadyCredited}</p>
        {/* Add content for already credited earnings */}
      </div>
      <div className="earnings-section">
        <h3>Pending Payment</h3>
        <p>Total: ₹{pendingPayment}</p>
        {/* Add content for pending payment earnings */}
      </div>
    </div>
  );
};

export default Earnings;
