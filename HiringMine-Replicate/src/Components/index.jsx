import { Link } from "react-router-dom"

const Navbar = () =>{
        return(
            <ul style={{
                display : 'flex',
                justifyContent : 'space-around'
            }}>
                <Link to="/"> Home</Link>
                <Link to="/About"> About</Link>
                <Link to="/Contact"> Contact</Link>
                <Link to="/Jobs"> Jobs</Link>
                
                
                {/* <li>Privcy</li>
                <li>Contact</li> */}
            </ul>
        )
    }

    export default Navbar