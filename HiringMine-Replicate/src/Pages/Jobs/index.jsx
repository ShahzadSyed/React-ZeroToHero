import { useEffect, useState } from "react"
import Navbar from "../../Components"

const Jobs =() => {
    
    const [filters , setFilters] = useState({})
    const [Jobs , setJobs] = useState({})

    async function callFilterApi(url){
        const resJSON = await fetch(url)
        const res = await resJSON.json() //OR => const {data} = await resJSON.json()

        setFilters(res.data) //OR => setFilters(data)
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

        <div>
            <select name="Category" id="">
                <option value="Category">Category</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Editor">Editor</option>
                <option value="Marketing">Marketing</option>
            </select>
        </div>

        
        </>
    )
}

export default Jobs