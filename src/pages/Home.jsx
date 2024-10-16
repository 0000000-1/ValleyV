import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Companydisplay from '../components/Companydisplay'
import Bulkbuttonsection from '../components/Bulkbuttonsection'
import ReelSection from '../components/ReelSection'
import Testimonials from '../components/Testimonials'
import Collection from '../components/Collection'
import Showoff from '../components/Showoff'

const Home = () => {
  
  return (
    <div>
        <HeroSection/>
        <Showoff/>
        <Collection/>
        <ReelSection/>
        <Testimonials/>
        <Companydisplay/>
        <Bulkbuttonsection/>
        <Footer/>
    </div>
  )
}


export default Home