const baseURL = 'http://localhost:3000/api/spooky-places/';

export default {
getSpookyPlaces() {
  return fetch(baseURL)
  .then(res => res.json())
},

postSpookyPlace(payload) {
return fetch(baseURL, {
  method: 'POST',
  body: JSON.stringify(payload),
  headers: { 'Content-Type': 'application/json'}
})
.then(res => res.json())
},

deleteSpookyPlace(id){
  return fetch(baseURL + id, {
    method: 'DELETE'
  })
},

updateSpookyPlace(id, payload) {
  return fetch(baseURL + id, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json'}
  })
  .then(res => res.json())
}
}
