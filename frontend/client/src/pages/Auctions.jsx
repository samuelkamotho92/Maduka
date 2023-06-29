import React,{useState,createContext} from 'react'
import Banner from '../components/Auction/Banner'
import Loginnavbar from '../components/Auction/Loginnavbar'
import Main from '../components/Auction/Main'
import Footer from '../components/Footer'
export const Filterprod = createContext()
const Auctions = () => {
  const [filterVal,setfilterVal] = useState('');
  return (
    <div className='flex flex-col min-h-screen'>
      <Filterprod.Provider value={{filterVal,setfilterVal}}>
      <Loginnavbar />
      <Banner />
      <Main />
      <Footer />
        </Filterprod.Provider>
    </div>
  )
}

export default Auctions
