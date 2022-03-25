import { Link, NavLink, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {sessionDeleteAction} from '../../store/actions/sessionActions'

const Navbar = () => {

    const dispatch = useDispatch()
    const router = useNavigate();

    function removeSession() {
        dispatch(sessionDeleteAction())
        router("/")
    }

    return ( 
        <nav className="navbar mt-3 mb-5">
            <h1>Lost In Translation ✌️</h1>
            <div className="links">
                <Link to="/translation">Translation</Link>
                <Link to="/profile">Profile</Link>
                <NavLink onClick={removeSession} to="/">Log-Out</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;