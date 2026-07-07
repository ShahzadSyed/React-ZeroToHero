import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [state, setState] = useState(true)

  return (
    <>
      <Home />
      <About />
      <Contact />
    </>
  )
}

function Home() {
  return(
    <h1>Hello qworld by Home</h1>
  )
}

function About() {
  return(
    <h1>Hello qworld by About</h1>
  )
}

function Contact() {
  return(
    <h1>Hello qworld by Contact</h1>
  )
}


export default App
