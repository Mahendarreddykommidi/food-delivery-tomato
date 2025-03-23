import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'
import "./Exploremenu.css"
const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h2>Explore menu</h2>
        <p className='explore-menu-text'>Choose from a diverse menu featuring delicious array of dishes
                crafted with finest ingredients our mission is to satisfy your cravings
                and elevate your dining experience
            </p>
            <div className="explore-menu-list">
                {
                    menu_list.map((item, index) => (
                        <div
                          onClick={() => setCategory(prev => prev=== item.menu_name ? "ALL" : item.menu_name )}
                          key={index}
                          className="explore-menu-list-item"
                        >
                          <p>{item.menu_name}</p>
                          <img
                            className={category === item.menu_name ? "active" : ""}
                            src={item.menu_image}
                            alt={item.menu_name}
                          />
                        </div>
                      ))
                }
            </div>


    </div>
  )
}

export default Exploremenu