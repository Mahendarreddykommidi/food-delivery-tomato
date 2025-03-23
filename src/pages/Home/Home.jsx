import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Explore menu/Exploremenu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'
import App from '../../App'
import Appdownload from '../../components/Download/Appdownload'

const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <Fooddisplay/>
        <Appdownload/>
        


    </div>
  )
}

export default Home