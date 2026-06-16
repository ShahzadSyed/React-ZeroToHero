import { useState } from 'react'
import FriendsList from './components/FriendsList.jsx';
import AddFriends  from './components/AddFriends.jsx';
import './App.css'


function App() {
  
  const [friends, setfriends] = useState([
    {
        name : "Ahmed",
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkliIuVgejvDwavQJbzUFo2z99ptt-UGB43w&s',
        balance : 0
    },
    {
        name : "Shahzad",
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nZ136jiwgQJ8Nm-aeU6Hj8QqFI7TsOY-mg&s',
        balance : 0
    },
    {
        name : "Raheel",
        image : 'https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg',
        balance : 0
    }
])

  return (
    <div>
    <h1>Eat N BILL </h1>
    <FriendsList friends = {friends}/>
    <AddFriends friends = {friends} setfriends={setfriends} />
    {/* <SplitBill /> */}
    </div>
  )
}

export default App
