//import { resourceUsage } from 'process'

const data = require('../dataParsed3.json')

export const actionAddLike = {
  type: 'ADD_LIKED_HOUSE'
}

export const actionQuitLike = {
  type: 'QUIT_LIKED_HOUSE'
}
/******************************************** */


//console.log("REQUIREDDATA",requiredData)
/*************************************** */
const initialState = []
data.map(info =>
  initialState.push({
    id: info.property_id,
    name: info.property_id,
    city: info.address.city,
    address: info.address.line,
    bedrooms: info.beds,
    bathrooms: info.baths,
    size: info.building_size?.size,
    price: info.price,
    image: info.image,
    rating:4.5,
    liked:false
  })
)
console.log('INITIALSTATE___:', initialState)
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
