const data = require('../dataParsed3.json')

export const actionAddLike = {
  type: 'ADD_LIKED_HOUSE'
}

export const actionQuitLike = {
  type: 'QUIT_LIKED_HOUSE'
}

export const actionDetermineLocation = {
  type: 'DETERMINE_LOCATION'
}

//Generate randon Ratings:
function getRandomInt(min, max) {
  return (Math.random() * (max - min + 1) + min).toFixed(1)
}
/*************************************** */
const initialState = []
data.map(info =>
  initialState.push({
    id: info.property_id,
    name: info.address.line,
    city: info.address.city,
    address: info.address.city,
    bedrooms: info.beds,
    bathrooms: info.baths,
    size: info.building_size?.size,
    price: info.price,
    image: info.image,
    rating: getRandomInt(3.6,4),
    liked: false
  })
)
//console.log('INITIALSTATE___:', initialState)
let modState = [...initialState]

export const addLikeReducer = (state = modState, action) => {
  switch (action.type) {
    case 'ADD_LIKED_HOUSE':
      console.log('ESTOY EN ADD LIKED HOUSE')
      modState = modState.map(house => {
        if (house.name === action.payload.name) {
          console.log('ESTOY EN IF ADD_ LIKED HOUSE')
          return {
            ...house,
            liked: true
          }
        }
        return house
      })

      return modState

    case 'QUIT_LIKED_HOUSE':
      modState = modState.map(house => {
        if (house.name === action.payload.name) {
          return {
            ...house,
            liked: false
          }
        }
        return house
      })

      return modState

    default:
      return modState
  }
}

/********************************** */
let randCity = ''
const cities = []
initialState.map(value => cities.push(value.city))
//console.log('CITIES', cities)

let citiesToShow=[...new Set(cities)]
citiesToShow.sort()
//console.log("YYY",citiesToShow)

randCity = citiesToShow[Math.round(Math.random() * citiesToShow.length)]
//console.log('RANDCITY', randCity)

export const determineLocationReducer = (state = randCity, action) => {
  switch (action.type) {
    case 'DETERMINE_LOCATION':
      console.log('ESTOY EN DETERMINE LOCATION')
      const newRandCity = cities[Math.round(Math.random() * cities.length)]
      console.log('RANDCITY', randCity)
      randCity = newRandCity
      return newRandCity

    default:
      return randCity
  }
}

/*************************************** */
