import {createStore} from 'redux'
import addLikeReducer from './reducers'

export const store=createStore(addLikeReducer)