import { useState } from 'react'
import './css/output.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
function App() {
  

  return (
<Routes>
  <Route exact  path='/'  element={<Home />}/>
  <Route path='/register' element={<Register />} />
  <Route path='/login' element={<Login />} />
</Routes>
  )
}

export default App
