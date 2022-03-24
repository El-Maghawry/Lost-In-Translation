import {useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import {loginAttemptAction} from '../../store/actions/loginActions'

const Login = () => {

    const dispatch = useDispatch();
    const router = useNavigate();
    const session  = useSelector(state => state.session)
    const usernameInput = useRef();

    const [credentials, setCredentials] = useState({
        username: ''
    })

    const onInputChange = event => {
        setCredentials({
            ...credentials,
            [event.target.id]: event.target.value
        })
    }

    const onFormSubmit = event => {
        event.preventDefault();
        if(usernameInput.current.value === ''){
            return
        }
        else{
            dispatch(loginAttemptAction(credentials.username))
            router('/translation')
        }
    }

    return(
        <>
        {session.loggedIn && <Navigate to='/translation' />}
        {!session.loggedIn &&       
        <div>
        <h1 className="header">Welcome to Lost In Translation</h1> 
        <form className="mt-4" onSubmit={onFormSubmit}>

            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input ref={usernameInput} id="username" className="form-control" type="text" placeholder="What's your name?" onChange={ onInputChange }/>
            </div>
            <button className="btn btn-primary btn-lg" type="submit">Login</button>
        </form>
        </div>}
        </>
  
    )
}

export default Login;