import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  const [isOpen, setIsopen] = useState(false)
  const [isSuccess, setIssuccess] = useState(false)
  

  return (

    <>
    <button onClick={() => setIssuccess(!isSuccess)}>Success / Rejecteed </button>
    <button onClick={() => setIsopen(true)}>open Modal</button>
    {
      isOpen && <Modal>
        {isSuccess ? <Sucess /> :  <Error />}
         </Modal> 
    }
    </> 
  )
}

export default App


const Modal = ({children}) => {
  return(
    <div style={{
      width : "50vw",
      height : "50vh",
      backgroundColor : "black",
      margin : "80px auto",
      borderRadius : "30px"
    }}>
      {/* <Sucess /> */}
      {/* <Error /> */}
      {children}
    </div>
  )
}

const Sucess = () => {
  return(
    <>
      <div style={{
        width : "100%",
        height : "100%",
        overflow : "hidden"
      }}>
        <img style={{width : "100%" , height : "100%" , objectFit : "cover"}} src="https://i.pinimg.com/originals/90/13/f7/9013f7b5eb6db0f41f4fd51d989491e7.gif" alt="" />
      </div>
      <h2>Successfuly Signed Up!</h2>
    </>
  )
}

const Error = () => {
  return(
    <>
      <div style={{
        width : "100%",
        height : "100%",
        overflow : "hidden"
      }}>
        <img style={{width : "100%" , height : "100%" , objectFit : "cover"}} 
        src="https://media.tenor.com/i3IU-7qJGW8AAAAM/request-denied-30-rock.gif" alt="" />
      </div>
      <h2>Rejected Signed Up!</h2>
    </>
  )
}