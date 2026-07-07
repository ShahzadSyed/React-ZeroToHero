import { memo, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [state, setState] = useState(true)
  // const [count, setCount] = useState(0)

  //here we implement {} != {}
  const [count, setCount] = useState({
    value : 0
  })

  //this obj will re-render, however we are using memo on components, we need to make usememo to stop re-render
  // const obj = {name : "Shahzad"}   

  const obj = useMemo(() =>{
    return{
      name : "Shahzad"
    }
  },[])

  // CASE STUDY
  // 1- memo  => stop re-rendering
  // 2- if {} != {} means if try to compare empty objects it goes false and memo unable to stop re-rendering

  console.log("App is rendering")

  return (
    <>
    {/* <button onClick={() => setCount(count +1)}>Update Count</button> */}

    {/* case 2 = {} != {} */}
    <button onClick={() => setCount({
      value : count.value +1
    })}>Update Count</button>


    <button onClick={() => setState(!state)}>State Changer</button>

      <Home count={count} obj ={obj} />
      <About />
      <Contact />
    </>
  )
}


// CASE 1 : MEMOIZATION method for avoiding re-render, until state changed!
const Home = memo(({count}) => {
  console.log("Home Component is rendering!")

  //for checking purpose why we use memo?
  for (let index = 0; index < 100000; index++) {    
    console.log(index)
  }



  return(
    <h1>Hello qworld by Home {count.value}</h1>
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
