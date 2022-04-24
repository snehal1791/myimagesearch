const api = 'https://api.imgur.com/3/gallery'
// let token = localStorage.token
// if (!token)
//   token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': 'Client-ID b067d5cb828ec5a'
}

export const getAll = (searchTerm) =>
  fetch(`${api}/search?q=${searchTerm}`, { headers })
    .then(res => res.json())
    .then(result => result.data)
