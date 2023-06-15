import { useState } from 'react'
import './css/output.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {

  return (
<Routes>
  <Route exact  path='/'  element={<Home />}/>
</Routes>
  )
}

export default App
