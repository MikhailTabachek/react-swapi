const baseUrl = "https://swapi.dev/api/"

export function getShipList() {
  return fetch(`${baseUrl}starships`)
  .then(res => res.json())
}

// export function getDetails(ship) {
//   return fetch (ship.shipName.url)
//   .then(res => res.json())
// }