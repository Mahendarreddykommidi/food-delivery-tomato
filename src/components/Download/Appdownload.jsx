import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/frontend_assets/assets'
const Appdownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
      <h1>Download your app</h1>
      <p>download your app available on playstore and app store</p>
      <div className="download-options">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt=''/>
      </div>
    </div>
  )
}

export default Appdownload