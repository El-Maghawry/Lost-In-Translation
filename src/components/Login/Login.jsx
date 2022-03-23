import {useState} from 'react'

function Login (){

    const [credentials, setCredentials] = useState({
        username: ''
    })

    const onInputChange = event => {
        setCredentials({
            ...credentials,
            [event.target.id]: event.target.value
        })
    }

    function getUser(){
        const apiURL = 'https://api-noroff.herokuapp.com'

    fetch(`${apiURL}/translations?username=${credentials.username}`)
    .then(response => response.json())
    .then(results => {
        // results will be an array of users that match the username of victor.
        if(results.length === 0){
            console.log("No user exists");
        }
        else{
            console.log("User exists");
        }
       
    })
    .catch(error => {
        console.log(error);
    })
    }

    return(
        <div>
        <h1 className="header">Welcome to Lost In Translation</h1> 
        <form className="mt-4">

            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input id="username" className="form-control" type="text" placeholder="What's your name?" onChange={ onInputChange }/>
            </div>
            <button className="btn btn-primary btn-lg" type="submit" onClick={getUser}>Login</button>
        </form>
        </div>
    )
}

export default Login;