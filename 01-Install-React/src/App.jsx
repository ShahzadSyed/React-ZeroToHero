import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  // var count = 0;

  const [count , SetCount]=useState(0)

  function counterHandler(){
    SetCount(count +1)
  }

  return(
    
    <div>
      <h1>First React App</h1>
      {count} 
      <br/><button onClick={counterHandler}>Click Me !</button>
    </div>
  )
}

export default App
