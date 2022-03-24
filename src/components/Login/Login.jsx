import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {loginAttemptAction} from '../../store/actions/loginActions'

const Login = () => {

    const dispatch = useDispatch();
    const router = useNavigate();


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
        dispatch(loginAttemptAction(credentials.username))
        console.log(localStorage.getItem('userSession'))
  
  
    }

    return(
        <div>
        <h1 className="header">Welcome to Lost In Translation</h1> 
        <form className="mt-4" onSubmit={onFormSubmit}>

            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input id="username" className="form-control" type="text" placeholder="What's your name?" onChange={ onInputChange }/>
            </div>
            <button className="btn btn-primary btn-lg" type="submit">Login</button>
        </form>
        </div>
    )
}

export default Login;