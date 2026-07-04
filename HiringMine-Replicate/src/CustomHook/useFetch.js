//this is my custom 

import { useEffect, useState } from "react";

export default function useFetch(url , isFilters){

    const [apiData , setApiData]=useState(isFilters ? {} :[])

    function callAPi(url){
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
          const {data} = res
          setApiData(data)
        })
        .catch((error) => console.log(error))
    }
    
    useEffect(() => {
        callAPi(url)
    },[])

    return [apiData]
}