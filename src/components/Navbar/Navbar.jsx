import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar mt-3 mb-5">
            <h1>Sign Language App ✌️</h1>
            <div className="links">
                <Link to="/translation">Translation</Link>
                <Link to="/Profile">Profile History</Link>
                <Link to="/">Log-Out</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;