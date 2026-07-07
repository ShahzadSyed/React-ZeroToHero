import { memo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [state, setState] = useState(true)

  console.log("App is rendering")

  return (
    <>
    <button onClick={() => setState(!state)}>State Changer</button>
      <Home />
      <About />
      <Contact />
    </>
  )
}

const Home = memo(() => {
  console.log("Home Component is rendering!")

  //for checking purpose why we use memo?
  for (let index = 0; index < 100000; index++) {    
    console.log(index)
  }



  return(
    <h1>Hello qworld by Home</h1>
  )
})

function About() {
  console.log("About Component is rendering!")
  return(
    <h1>Hello qworld by About</h1>
  )
}

function Contact() {
  console.log("Contact Component is rendering!")
  return(
    <h1>Hello qworld by Contact</h1>
  )
}


export default App
