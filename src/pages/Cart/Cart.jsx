import React, { useContext } from 'react';
import './Cart.css';
import { ShopContext } from '../../context/Shopcontext'
import { assets } from '../../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cartItems,  removeFromcart,food_list,getTotalamount} = useContext(ShopContext);
 const Navigate=useNavigate()
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-title cart-items-item" key={index}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <p>{cartItems[item._id]}</p>
                <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                <p onClick={()=>removeFromcart(item._id)}>X</p>
              
            
              </div>
              
            );
          }
          return null;
        })}
      </div>
      <hr></hr>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
        </div>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalamount().toFixed(2)}</p> {/* Correctly call the function and format the value */}
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>$2.00</p> {/* Assuming a fixed delivery fee */}
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${(getTotalamount() + 2).toFixed(2)}</b> {/* Add delivery fee to subtotal */}
          </div>
          <button onClick={()=>Navigate("/Placeorder")}className="btn-cart">PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code, enter it here:</p>
          </div>
          <div className="cart-promo-text-input">
            <input type="text" placeholder="Enter promo code" />
            <button className="input-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;