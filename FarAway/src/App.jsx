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
      <Form itemList={itemList} setItemList={setItemList} />
      <PackingList itemList = {itemList} />
      <Stats itemList = {itemList} />

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

const Form = ({itemList , setItemList}) =>{
  
  const [itemNumber , setItemNumber] = useState()
  const [itemData , setItemData] = useState()

const addHandler = () =>{
 
  const newList  = [...itemList]

  newList.push({
    number : itemNumber,
    data : itemData
  })
  setItemList(newList)
 
}

  const itemDataHandler = (value) =>{
    setItemData(value)
  }

  const itemNumberHandler = (value) =>{
    setItemNumber(value)
  }


  return(
    <div id='form'>
      <p>What do you need  for your trip??</p>
      <select onChange={(e) => {
        itemNumberHandler(e.target.value)
      }}>
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
      <input type='text' placeholder='item..' onChange={(e) => 
        {itemDataHandler(e.target.value)}}></input>
      <button onClick={addHandler}>Add</button>
    </div>
  )
}

const PackingList = ({itemList}) =>{
  return(
    <div id='packingList'>
      <div id='itemsList'>
        {
          itemList?.map(itemLi => <Item itemLi={itemLi} /> )
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


const Stats = ({itemList}) =>{
  return(
    <p style={{
      backgroundColor : "#68bfa2",
      textAlign : 'center',
      height : '29px',
      padding :'7px 0px'
    }}>You Have {itemList.length} Items on your list, and you already packed 0 (0%)</p>
  )
}

const Item = ({itemLi}) =>{
  return(
    <div style={{
      display : 'flex',
      gap : '10px'
    }}>
      <input type="checkbox" name="" id="" />
      <p>{itemLi.number} - {itemLi.data}</p>
      <button style={{
        height : '15px',
        width : '15px',
        fontSize : '10px'
        
      }}>X</button>
    </div>
  )
}