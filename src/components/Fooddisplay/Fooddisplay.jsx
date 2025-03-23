import React from 'react'
import  "./Fooddisplay.css"
import { food_list } from '../../assets/frontend_assets/assets'
import Fooditem from '../Fooditem/Fooditem'
const Fooddisplay = () => {
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
         {
            food_list.map((item,index)=>{
                return(
                    <Fooditem key={index} id={item._id} price={item.price} image={item.image} description={item.description} name={item.name}>

                    </Fooditem>
                )
            })
         }

        </div>



    </div>
  )
}

export default Fooddisplay