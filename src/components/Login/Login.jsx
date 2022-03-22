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
        console.log(results);
    })
    .catch(error => {
        console.log(error);
    })
    }

    return(
        <div>
        <h1>Welcome to Lost In Translation</h1>
        <form className="m-4">
            <input id="username" type="text" className="border-r-0  border-2 rounded-r-none" placeholder="What's your name?" onChange={ onInputChange }/>
            <button type="submit" onClick={getUser} className="bg-amber-300 border-l-0  border-2 rounded-md rounded-l-none">Login</button>
        </form>
        </div>
    )
}

export default Login;