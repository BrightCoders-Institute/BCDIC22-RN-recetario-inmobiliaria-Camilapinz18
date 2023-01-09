//import { resourceUsage } from 'process'

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

export const actionSearchHouse = {
  type: 'SEARCH_HOUSE'
}
/******************************************** */

/****** */

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
    rating: 4.5,
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
      return { ...initialState }
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

export const searchHouse = (state = initialState, action) => {
  const searchedHouses = []
  switch (action.type) {
    case 'SEARCH_HOUSE':
      console.log('ESTOY EN SEARCH_HOUSE')

      initialState.map(house =>
        house.address === action.payload.address &&
        house.price > action.payload.priceMin &&
        house.price < action.payload.priceMax &&
        house.size > action.payload.sizeMin &&
        house.size < action.payload.sizeMax &&
        house.bedrooms >= action.payload.bedrooms &&
        house.bathrooms >= action.payload.bathrooms &&
        house.rating >= action.payload.rating
          ? searchedHouses.push(house)
          : ''
      )

      // console.log('SEARCHED:HOUSES', searchedHouses)
      return searchedHouses

    default:
      return searchedHouses
  }
}
