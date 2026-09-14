
import './App.css'
import Nav from './Component/Nav'
import FoodRescue from './Component/FoodRescue'
import { Route , Routes } from 'react-router-dom'
import Home from './Component/Home.jsx'
import Footer from './Component/Footer.jsx'
import Learn from './Component/Learn.jsx'
import SmartFarm from './Component/SmartFarming.jsx'



function App() {

  
  return (

    <>
    <Nav/> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/food-rescue' element={<FoodRescue/>}/>
      <Route path='/learn' element={<Learn/>}/>
      <Route path='/smart-farming' element={<SmartFarm/>}/>
    </Routes>
    <Footer/>
    </>

  )
}
export default App
