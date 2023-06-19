import React from 'react'
import Banner from '../components/Auction/Banner'
import Loginnavbar from '../components/Auction/Loginnavbar'
import Main from '../components/Auction/Main'
const Auctions = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Loginnavbar />
      <Banner />
      <Main />
    </div>
  )
}

export default Auctions
