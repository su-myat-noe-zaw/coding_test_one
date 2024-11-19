import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/heroSection/HeroSection'
import TrendingSection from '../components/trending/TrendingSection'
import HappeningNowSection from '../components/happeningNow/HappeningNowSection'
import FooterSection from '../components/footer/FooterSection'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-full mx-auto'>
        <HeroSection/>
        <TrendingSection/>
        <HappeningNowSection/>
      </div>
      <FooterSection/>
    </div>
  )
}

export default HomePage