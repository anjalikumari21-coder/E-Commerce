import React from 'react';
import { Link } from 'react-router-dom';
import './OrderSuccess.css';

export const OrderSuccess = ({ orderDetails }) => {
  return (
    <div className="order-success-container">
      <h2>Order Placed Successfully!</h2>
      <p>Thank you for shopping with us.</p>
      <div className="order-success-details">
        <p><strong>Order ID:</strong> {orderDetails.id}</p>
        <p><strong>Items:</strong> {orderDetails.items}</p>
        <p><strong>Total Amount:</strong> ${orderDetails.amount}</p>
        <p><strong>Payment Mode:</strong> {orderDetails.paymentMode}</p>
      </div>
      <Link to="/" className="order-success-home-btn">Go to Home</Link>
    </div>
  );
};

