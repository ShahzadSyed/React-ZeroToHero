import { useState } from 'react'
import Navbar from './Components'
import './App.css'
import Home from './Pages/Home'
import { useEffect } from "react"
import useFetch from './CustomHook/useFetch'

function App() {

  // const [jobs , setJobs]  =useState([])
  // const [users, setUsers]  =useState([])

  

  //custom Hook
  const [jobs] = useFetch('https://api.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=')

  const [users] = useFetch('https://api.hiringmine.com/api/users/home?sortBy=mostViewed')

  console.log(jobs ,"==>> Jobs")
  console.log(users ,"==>> users")


  //  function callAPi(url){
  //       fetch(url)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         const {data} = res
  //         setJobs(data)
  //       })
  //       .catch((error) => console.log(error))
  //   }

    // function callUserAPi(url){
    //     fetch(url)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       const {data} = res
    //       setUsers(data)
    //     })
    //     .catch((error) => console.log(error))
    // }

    // useEffect(() => {
     
    //     // callAPi('https://api.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=')
    //     callUserAPi('https://api.hiringmine.com/api/users/home?sortBy=mostViewed')
    // },[])
 
  return (
    <>

      <Navbar />

      <div style={{
        textAlign:'center'
        
        
      }}>
        <input
    type="text"
    placeholder="Search Jobs..."/>
      </div>



      <h1 style={{
        textAlign :"center"
      }}>This is App Componenets</h1>
      
      {
        jobs.slice(0,3).map(({
          companyName,
          designation,
          payRangeStart,
          country,
          city
        }) => {
          return(
            <div style={{
        border :'2px solid black',
        textAlign:'center',
        marginTop:'30px',
        padding :'20px',
        display :'flex',
        flexDirection :'column',
        gap:'20px'
      }}>
        <h1>{companyName}</h1>
        <h2>{designation}</h2>
        <h4>salary : {payRangeStart || 'Not Disclosed!'}</h4>
        <h5>{country}</h5>
        <h5>{city}</h5>
      </div>
          )
        })
      }

      {
        users.slice(0,3).map(({
          firstName,
          jobTitle,
          profilePic,
          userName,
          lastName
        }) => {
          return(
            <div style={{
        border :'2px solid black',
        textAlign:'center',
        marginTop:'30px',
        padding :'20px',
        display :'flex',
        flexDirection :'column',
        gap:'20px',
        alignItems : 'center'
      }}>
        <img style={{
          width :'100px',
          height :'100px',
          borderRadius : '50%'
        }} src={profilePic} alt="" />
        <h1>{firstName} {lastName}</h1>
        <h2>{jobTitle}</h2>
        <h4>{userName}</h4>
        
        
      </div>
          )
        })
      }


    </>
  )
}

export default App
