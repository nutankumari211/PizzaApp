// OrderForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import './OrderForm.css';

const OrderForm = ({ handlePlaceOrder }) => {
  const [newOrder, setNewOrder] = useState({
    type: 'Veg',
    size: 'Medium',
    base: 'Thin',
  });

  const handleChange = (e) => {
    setNewOrder({
      ...newOrder,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePlaceOrder(newOrder);
  };

  return (
    <div className="order-form-container">
      <h2>Place a Pizza Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select name="type" value={newOrder.type} onChange={handleChange}>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </label>
        <br />
        <label>
          Size:
          <select name="size" value={newOrder.size} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <br />
        <label>
          Base:
          <select name="base" value={newOrder.base} onChange={handleChange}>
            <option value="Thin">Thin</option>
            <option value="Thick">Thick</option>
          </select>
        </label>
        <br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handlePlaceOrder: (newOrder) =>
    dispatch({ type: 'PLACE_ORDER', payload: { ...newOrder, id: new Date().getTime() } }),
});

export default connect(null, mapDispatchToProps)(OrderForm);
