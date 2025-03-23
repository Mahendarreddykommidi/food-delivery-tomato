

import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import './App.css'
import { useState } from 'react'
import Loginpopup from './components/Login/Loginpopup'
function App() {
 const [Showlogin,setShowlogin]=useState(false)
  return (
    <> 
     {Showlogin && <Loginpopup setShowlogin={setShowlogin} />}
      <div className='app'>
      
        <Navbar setShowlogin={setShowlogin}/> 
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/placeorder' element={<Placeorder/>}></Route>

        </Routes>
      
      </div>
      <Footer/>
    </>
  )
}

export default App
