import { useEffect, useState } from "react"
import Navbar from "../../Components"
import { Link } from "react-router-dom"


const Jobs =() => {
    
    const [filters , setFilters] = useState([])
    const [Jobs , setJobs] = useState([])

    async function callFilterApi(url){
        const resJSON = await fetch(url)
        const {data} = await resJSON.json() //OR => const {data} = await resJSON.json()

        setFilters(data) //OR => setFilters(data)
    }

    async function callJobsApi(url){
        const resJSON = await fetch(url)
        const {data} = await resJSON.json() //OR => const {data} = await resJSON.json()

        setJobs(data) //OR => setFilters(data)
    }

    useEffect(() => {

        //Filters API is called
        callFilterApi(`https://api.hiringmine.com/api/filterations/all`)

        //Jobs API is called
        callJobsApi(`https://api.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=`)
    },[])


    return(
        <>
        <Navbar />
        <h1 style={{
            textAlign :'center',
            marginTop :'20px'

        }}>This is Job Page</h1>

        <div style={{
            display :'flex',
            justifyContent : 'space-around'
        }}>
            {
            filters?.filteration?.map((filter , index) => {
                return(
                    <div>
            <select name="Category" id="">
                <option value="">{filter.filterationName}</option>
                
                {
                    filter?.filterationOptions?.map((option) => {
                        return(
                            <option value="Accounts">{option.title}</option>
                        )

                    })
                }
            </select>
        </div>
                )
            })
        }
        </div>

        <h1 style={{
            textAlign :'center'
        }}>Our Jobs</h1>

        {
        Jobs.map(({
          companyName,
          designation,
          payRangeStart,
          country,
          city,
          _id : id
        }) => {
          return(
            <Link to={`/Jobs/${id}`} style={{
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
      </Link>
          )
        })
      }

        
        </>
    )
}

export default Jobs