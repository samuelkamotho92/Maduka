import React from 'react'
import Navbar from '../components/Navbar'
import HeroHome from '../components/HeroHome'
const Home = () => {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      {/* header */}
      <Navbar />
      <main  className='flex-grow'>
<HeroHome />
      </main>
    </div>
  )
}

export default Home
