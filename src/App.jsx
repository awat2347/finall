import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Pricing_Plan from './pages/Pricing_Plan'
import Touch from './pages/Touch-page'



const App = () => {
  return (
    <>
      <Header/>
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='Pricing_Plan' element={<Pricing_Plan/>}/>
    <Route path='Touch' element={<Touch/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App