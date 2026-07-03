import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home/index.jsx'
import About from './Pages/About/index.jsx'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Contact from './Pages/Contact/index.jsx'
import Jobs from './Pages/Jobs/index.jsx'
import SingleJob from './Pages/SingleJob/index.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Jobs' element={<Jobs />} />
    <Route path='/Jobs/:id' element={<SingleJob />} />
  </Routes>  
  </BrowserRouter>
  
)

