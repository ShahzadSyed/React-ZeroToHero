import { useState } from 'react'
import FriendsList from './components/FriendsList.jsx';
import AddFriends  from './components/AddFriends.jsx';
import SplitBill from './components/SplitBill.jsx';
import './App.css'


function App() {

  const[selectedfriend , setselectedfriend] =useState()
  
  const [friends, setfriends] = useState([
    {
        name : "Shahzad",
        image : 'https://media.licdn.com/dms/image/v2/D4D03AQF58Zb1X9rlTg/profile-displayphoto-scale_400_400/B4DZvc7KgkJMAg-/0/1768938056620?e=2147483647&v=beta&t=qmw0Hh2J8CXjqYAnDlJyRfPIkhGxlcP0DgijfGQVuL8',
        balance : 0
    },
    {
        name : "Asad",
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
      <h1 style={{
        textAlign : "center"
      }}>Eat N BILL - Complete Process </h1>
    <div style={{
      display : "flex",
      justifyContent : "space-evenly"
    }}>
    
    <div>
    <FriendsList friends = {friends} selectedfriend={selectedfriend} setselectedfriend={setselectedfriend} />
    <AddFriends friends = {friends} setfriends={setfriends} />
    </div>

    {selectedfriend && <SplitBill selectedfriend={selectedfriend} friends={friends} setfriends={setfriends} />} 
    </div>
    </div>
  )
}

export default App
