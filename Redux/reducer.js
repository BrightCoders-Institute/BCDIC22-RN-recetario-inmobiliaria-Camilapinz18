const data = require('../data.json')

export const actionAddLike = {
  type: 'ADD_LIKED_HOUSE'
}

export const actionQuitLike = {
  type: 'QUIT_LIKED_HOUSE'
}

const initialState = []
data.map(info => initialState.push({ name: info.name, liked: false }))
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
