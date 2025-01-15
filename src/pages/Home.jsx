import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import Expertise from '../Components/Expertise/Expertise'
import About from '../Components/About/About'
import Our_service from '../Components/our_service/Our_service'
import Why from '../Components/WHY/Why'
import STARTED from '../Components/STARTED/STARTED'
import TESTIMONIAL from '../Components/TESTIMONIAL/TESTIMONIAL'
import Pricing from '../Components/Pricing/pricing'
import Discover from '../Components/Discover/Discover'
import RecentArticles from '../Components/RecentArticles/RecentArticles'
import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (
    <>
     
      <Hero/>
      <Expertise/>
      <About/>
      <Our_service/>
      <Why/>
      <STARTED/>
      <TESTIMONIAL/>
      <Pricing/>
      <Discover/>
      <RecentArticles/>
     
    </>
  )
}

export default Home