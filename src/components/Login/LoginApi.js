const apiURL = 'https://api-noroff.herokuapp.com'
const apiKey = '9c4e656f9d584e5fa37a48b92e8b568f'
let user;

export const LoginApi = {

    login(credentials){
        return fetch(`${apiURL}/translations?username=${credentials}`)
        .then( response => response.json())
        .then(async users => {
            if(credentials.username !== ''){
                if(users.length === 0){
                    await fetch(`${apiURL}/translations`, {
                        method: 'POST',
                        headers: {
                          'X-API-Key': apiKey,
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ 
                            username: credentials, 
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
                    user = newUser;
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    return user;
                }
                else{
                   return users[0]
                }
            }else{
                const {error = 'An error occurred' } = await users.json()
                throw new Error(error)
            }
        })
    },
}