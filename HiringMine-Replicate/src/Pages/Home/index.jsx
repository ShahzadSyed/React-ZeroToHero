import { useEffect } from "react"
import Navbar from "../../Components"

const Home = () => {

    function callAPi(url){
        fetch(url)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((error) => console.log(error))


    }

    useEffect(() => {
        console.log("useEffect called");
        callAPi('https://api.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=')
    },[])

  



    return(
        <>
        <Navbar />
        <h1>This is Home Page</h1>
        </>
    )
}

export default Home