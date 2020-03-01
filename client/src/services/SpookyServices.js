const baseURL = 'http://localhost:3000/api/spooky-places/';

export default {
getSpookyPlaces() {
  return fetch(baseURL)
  .then(res => res.json())
},

// http://localhost:3000/api/spooky-places?price
getSpookyPlacesF(formInput) {
  // console.log(selectedRange);

  // {}
  // debugger;

  // let queryStr = '?price[gt]=' + selectedRange.greaterThan;
  // let queryStr = "?";
  // const formKeys = Object.keys(formInput)
  //
  // for (let key,index of formKeys) {
  //   debugger;
  //   if (formInput[key]) {
  //
  //     if (key === 'price') {
  //
  //       if (index !== 0) {
  //         queryStr += '&'
  //       }
  //
  //       queryStr += `${key}[gt]=` + formInput.price.greaterThan;
  //
  //       if (formInput.price.lessOrEqualTo) {
  //         queryStr += `&${key}[lte]=` + formInput.price.lessOrEqualTo
  //       }
  //
  //     } else {
  //
  //       if (index !== 0) {
  //         queryStr += '&'
  //       }
  //       queryStr += `${key}=${formInput[key]}`
  //     }
  //   }
  // }

  // debugger;




   // + '&price[lte]=' + selectedRange.lessOrEqualTo
  // console.log(queryStr);

  return fetch(baseURL + queryStr)
  .then(res => res.json());

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
