//save a user to database
export const savedUser = user => {
  const currentUser = {
    email:user.email,
  }
  fetch(`http://localhost:4000/users/${user?.email}`, {
    method: 'PUT',
    headers: {
      'content-type':'application/json'
    },
    body:JSON.stringify(currentUser)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    }).catch(error=>console.log(`404 page not found ${error}`))
}