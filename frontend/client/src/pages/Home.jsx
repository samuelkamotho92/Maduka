import React from 'react'
import Navbar from '../components/Navbar'
import HeroHome from '../components/HeroHome'
import Features from '../components/Features'
import Teams from '../components/Team'
import Services from '../components/Services'
const Home = () => {
  return (
    <div className='flex flex-col min-h-screen '>
      {/* header */}
      <Navbar />
  <main  className='flex-grow'>
<HeroHome />
<Features />
<Teams />
<Services />
      </main>
    </div>
  )
}

export default Home
