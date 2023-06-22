import { useState } from 'react'
import './css/output.css'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Auctions from './pages/Auctions'
import {ToastContainer} from 'react-toastify';
import Auction from './components/Auction/Auction'
import Sell from './components/Auction/Sell'
function App() {
  return (
    <div>
    <Router>
  <ToastContainer />
<Routes>
  <Route exact  path='/'  element={<Home />}/>
  <Route path='/register' element={<Register />} />
  <Route path='/login' element={<Login />} />
  <Route path='/auctions' element={<Auctions />}  />
  <Route path='/auctions/:id' element={<Auction />} />
  <Route path="/sell" element={<Sell />} />
</Routes>
    </Router>
    </div>
  )
}

export default App
