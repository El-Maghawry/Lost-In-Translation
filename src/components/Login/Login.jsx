import {useState} from 'react'

function Login (){

    const apiURL = 'https://api-noroff.herokuapp.com'
    const apiKey = '9c4e656f9d584e5fa37a48b92e8b568f'
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
    fetch(`${apiURL}/translations?username=${credentials.username}`)
    .then(response => response.json())
    .then(users => {
        // results will be an array of users that match the username of victor.
        if(users.length === 0){
            registerUser(credentials.username);
        }
        else{
            console.log(users[0])
        }
    })
    .catch(error => {
        console.log(error);
    })
    }

function registerUser(username){
    fetch(`${apiURL}/translations`, {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: username, 
            translations: [] 
        })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not create new user')
      }
      return response.json()
    })
    .then(newUser => {
      // newUser is the new user with an id
      console.log(newUser)
    })
    .catch(error => {
        console.log(error)
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
            <p className="btn btn-primary btn-lg" type="submit" onClick={getUser}>Login</p>
        </form>
        </div>
    )
}

export default Login;