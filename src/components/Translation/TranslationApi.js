const apiURL = 'https://api-noroff.herokuapp.com'
const apiKey = '9c4e656f9d584e5fa37a48b92e8b568f'

export const TranslationApi = {

    updateUser(userId, translations){
        return fetch(`${apiURL}/translations/${userId}`, {
        method: 'PATCH', // NB: Set method to PATCH
        headers: {
            'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Provide new translations to add to user with id 1
            translations: translations
        })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not update translations history')
      }
      return response.json()
    })
    .then(updatedUser => {
      // updatedUser is the user with the Patched data
      return updatedUser
    })
    .catch(error => {
        console.log(error)
    })
    }
}