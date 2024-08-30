import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/action";
import "./style.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)} x {item.quantity}</span>
              <button onClick={() => handleAddToCart(item)}>Add</button>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                disabled={item.quantity <= 0}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
