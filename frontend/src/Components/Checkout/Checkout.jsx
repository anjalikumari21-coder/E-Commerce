import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { OrderSuccess } from '../OrderSuccess/OrderSuccess';
import './Checkout.css';

export const Checkout = () => {
  const { cartItems, all_product, getTotalCartAmount, getTotalCartItems } = useContext(ShopContext);
  const [paymentMode, setPaymentMode] = useState('cod');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePaymentChange = (e) => {
    setPaymentMode(e.target.value);
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    // Prepare order details for success component
    const orderDetails = {
      id: Math.floor(Math.random() * 1000000), // Random order id
      items: getTotalCartItems(),
      amount: getTotalCartAmount(),
      paymentMode: paymentMode === 'cod' ? 'Cash on Delivery' : paymentMode === 'card' ? 'Credit/Debit Card' : 'UPI'
    };
    return <OrderSuccess orderDetails={orderDetails} />;
  }

  return (
    <div className="checkout-container">
      <h2>Order Checkout</h2>
      <div className="checkout-info">
        <strong>Number of Items:</strong> {getTotalCartItems()}
      </div>
      <div className="checkout-info">
        <strong>Total Amount:</strong> ${getTotalCartAmount()}
      </div>
      <div className="checkout-summary">
        <strong>Order Summary:</strong>
        <ul>
          {all_product.filter(e => cartItems[e.id] > 0).map(e => (
            <li key={e.id}>
              {e.name} x {cartItems[e.id]} = ${e.new_price * cartItems[e.id]}
            </li>
          ))}
        </ul>
      </div>
      <div className="checkout-payment">
        <strong>Mode of Payment:</strong>
        <label>
          <input
            type="radio"
            value="cod"
            checked={paymentMode === 'cod'}
            onChange={handlePaymentChange}
          />
          Cash on Delivery
        </label>
        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMode === 'card'}
            onChange={handlePaymentChange}
          />
          Credit/Debit Card
        </label>
        <label>
          <input
            type="radio"
            value="upi"
            checked={paymentMode === 'upi'}
            onChange={handlePaymentChange}
          />
          UPI
        </label>
      </div>
      <button className="checkout-placeorder-btn" onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};