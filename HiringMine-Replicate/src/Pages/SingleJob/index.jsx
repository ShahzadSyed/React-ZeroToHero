import { useParams } from "react-router-dom"

const SingleJob = () =>{

const abc = useParams()


    return(
        <h1>{abc.id}</h1>
    )
}

export default SingleJob