import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [itemList, setItemList] = useState([])

  return (
    <>
      <Logo />
      <Form />
      <PackingList itemList = {itemList} />
      <Stats />

    </>
  )
}

export default App

function Logo(){
  return(
    <h1 style={{
      backgroundColor :" #f19721",
      padding : "20px",
      textAlign : 'center'
    }}>FAR AWAY</h1>
  )
}

const Form = () =>{
  return(
    <div id='form'>
      <p>What do you need  for your trip??</p>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <input type='text' placeholder='item..'></input>
      <button>Add</button>
    </div>
  )
}

const PackingList = ({itemList}) =>{
  return(
    <div id='packingList'>
      <div id='itemsList'>
        {
          itemList?.map(itemLi => <Item  /> )
        }
      </div>

      <div id="btns">
        <select name="" id=""
        style={{
          border:'none',
          width :'150px',
          backgroundColor : '#fde8b5',
          borderRadius : '10px'
          }}
        >
          <option value="">Sort by Order Input</option>
          <option value="">Sort by Description</option>
          <option value="">Sort by Packed Status</option>
        </select>
        <button style={{
          border:'none',
          width :'100px',
          backgroundColor : '#fde8b5',
          borderRadius : '10px'
          }}>Clear List</button>
      </div>

    </div>
  )
}


const Stats = () =>{
  return(
    <p style={{
      backgroundColor : "#68bfa2",
      textAlign : 'center',
      height : '29px',
      padding :'7px 0px'
    }}>You Have 6 Items on your list, and you already packed 0 (0%)</p>
  )
}

const Item = () =>{
  return(
    <div style={{
      display : 'flex',
      gap : '10px'
    }}>
      <input type="checkbox" name="" id="" />
      <p>test update</p>
      <button style={{
        height : '15px',
        width : '15px',
        fontSize : '10px'
        
      }}>X</button>
    </div>
  )
}