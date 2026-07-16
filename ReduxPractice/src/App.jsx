import { useState } from 'react'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Contact } from './Components/Contact'


import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learning React redux</h1>
      <Home />
      <About />
      <Contact />
    </>
  )
}

export default App
