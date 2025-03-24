import React from 'react'
import "./Fooditem.css"
import { assets } from '../../assets/frontend_assets/assets'
import { useContext } from 'react'
import { ShopContext } from '../../context/Shopcontext'
const Fooditem = ({id,price,image,name,description}) => {
    const {cartItems,addtoCart,removeFromcart}=useContext(ShopContext)
  return (
    <div className='food-item' >
        <div className="food-item-image">
            <img className='food-item-image' src={image} alt={name} />
             {!cartItems[id]
                ?<img className='add' onClick={()=>addtoCart(id)} src={assets.add_icon_white}></img>
                :<div className='food-item-counter'>
                    <img onClick={(removeFromcart(id))} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems}</p>
                    <img onClick={()=>addtoCart(id)} src={assets.add_icon_green} alt="" />


                </div>
                
             }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <h3>{name}</h3>
                <img src={assets.rating_starts} alt="rating" />
            </div>
            <p className="food-item-des">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>

    </div>
  )
}

export default Fooditem