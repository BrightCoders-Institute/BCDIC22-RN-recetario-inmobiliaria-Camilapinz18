const data = require('../data.json')

export const actionAddLike = {
  type: 'ADD_LIKED_HOUSE'
}

export const actionQuitLike = {
  type: 'QUIT_LIKED_HOUSE'
}

const initialState = []
data.map(info => initialState.push({ name: info.name, liked: false }))
//console.log('INITIALSTATE___:', initialState)

function addLikeReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_LIKED_HOUSE:
      initialState.map(house => {
        if (house.name === action.payload.name) {
          return {
            ...house,
            liked: true
          }
        }
        return initialState
      })

      return state

    case QUIT_LIKED_HOUSE:
      initialState.map(house => {
        if (house.name === action.payload.name) {
          return {
            ...house,
            liked: false
          }
        }
        return initialState
      })

      return state

    default:
      return state
  }
}

export default addLikeReducer
