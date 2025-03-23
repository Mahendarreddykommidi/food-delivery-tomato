
import React, { useContext } from 'react'
import "./Placeorder.css"
import { ShopContext } from '../../context/Shopcontext';
 
const Placeorder = () => {
  const { cartItems,  removeFromcart,food_list,getTotalamount} = useContext(ShopContext);
  return (
    <div>       
    <form className='placeorder'>
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder='firstName'/>
          <input type="text" placeholder='Lastname'/>
        </div>
        <input type="text" placeholder='Email adress'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-filels">
        <input type="text" placeholder='City'/>
        <input type="text" placeholder='State'/>
        </div>
        <input type="number" placeholder='Zipcode'/>
        <input type="text" placeholder='Country'/>
   <br />
   <input type="number" placeholder='Phonenumber'/>

   <input type="submit" placeholder='submit'/>
      </div>

      <div className="placeorder-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
        </div>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalamount().toFixed(2)}</p> {/* Correctly call the function and format the value */}
          </div><hr />
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

  
    </form>
    



    </div>

  )
}

export default Placeorder